<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const searchComponent = ref(null)

// Function to focus the hidden input and open the modal
const openSearch = () => {
  if (searchComponent.value) {
    // Find the input element within AlgoliaDocSearch
    const input = (searchComponent.value as any).$el.querySelector('input')
    if (input) {
      input.focus() // Focusing the input should trigger the modal
    }
  }
}
const removeOrigin = (url: string) => {
  const origin = window.location.origin
  return url.replace(origin, '')
}
</script>

<template>
  <div class="w-full flex justify-center">
    <AlgoliaDocSearch
      ref="searchComponent"
      placeholder="Search Documentation"
      :transform-items="(items) => {
        return items.map((item) => {
          item.url = removeOrigin(item.url.replace('/#', '#'))
          return item
        })
      }"
    />
    <div
      class="hidden px-3 py-2 w-full max-w-xl cursor-pointer flex items-center justify-between border border-slate-200 rounded-md bg-white shadow-sm"
      @click="openSearch"
    >
      <div class="flex items-center gap-x-3">
        <span><font-awesome-icon
          icon="magnifying-glass"
          class="text-gray-400 translate-y-0.5"
        /> </span>
        <span class="text-gray-400">Search Documentation</span>
      </div>
      <div class="flex items-center gap-x-1">
        <span
          class="text-xs font-medium text-gray-500 px-1 text-center rounded bg-slate-50 border border-gray-300"
        >Ctrl</span>
        <span
          class="text-xs font-medium text-gray-500 px-1 text-center rounded bg-slate-50 border border-gray-300"
        >k</span>
      </div>
    </div>
  </div>
</template>

<style>
.DocSearch-Button {
  align-items: center;
  background: white !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 5px !important;
  color: #e2e8f0 !important;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: 36px;
  justify-content: space-between;
  margin: 0 0 0 16px;
  padding: 0 8px;
  user-select: none;
  width: 500px !important;
  outline: none !important;
}

.DocSearch-Button:hover,
.DocSearch-Button:active,
.DocSearch-Button:focus {
  background: none !important;
  box-shadow: none !important;
  color: none !important;
  outline: none !important;
}

.DocSearch-Button-Container {
  align-items: center;
  display: flex;
}

.DocSearch-Search-Icon {
  stroke-width: 2 !important;
}

.DocSearch-Button .DocSearch-Search-Icon {
  color: #9ca3af !important;
  width: 13px !important;
}

.DocSearch-Button-Placeholder {
  font-size: 14px !important;
  padding: 0 12px 0 6px;
  color: #9ca3af !important;
  padding-left: 10px !important;
}

.DocSearch-Button-Keys {
  display: flex;
  min-width: calc(2 * 20px + 2 * 0.4em);
}

.DocSearch-Button-Key {
  align-items: center;
  background: #f8fafc !important;
  border-radius: 3px;
  box-shadow: none !important;
  color: #9ca3af !important;
  border: 1px solid #e2e8f0 !important;
  display: flex;
  height: 18px;
  justify-content: center;
  margin-right: 0.4em;
  position: relative;
  padding: 2px !important;
  /* border: 0; */
  width: auto !important;
}

@media (prefers-reduced-motion) {
  .DocSearch-Button-Key {
    transition: none;
  }
}

.DocSearch-Button-Key--pressed {
  transform: translate3d(0, 1px, 0);
  box-shadow: var(--docsearch-key-pressed-shadow);
}

@media (max-width: 768px) {

  .DocSearch-Button-Keys,
  .DocSearch-Button-Placeholder {
    display: none;
  }
}

/* search popup */
/* Body modifier */

.DocSearch--active {
  /*
   * We need to mark it as important because some websites override the
   * `style` attribute (e.g. Docusaurus).
   */
  overflow: hidden !important;
}

/* Container & Modal */

.DocSearch-Container,
.DocSearch-Container * {
  box-sizing: border-box;
}

.DocSearch-Container {
  background-color: var(--docsearch-container-background);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 200;
}

.DocSearch-Container a {
  text-decoration: none;
}

.DocSearch-Link {
  appearance: none;
  background: none;
  border: 0;
  color: var(--docsearch-highlight-color);
  cursor: pointer;
  font: inherit;
  margin: 0;
  padding: 0;
}

.DocSearch-Modal {
  background: var(--docsearch-modal-background);
  border-radius: 6px;
  box-shadow: var(--docsearch-modal-shadow);
  flex-direction: column;
  margin: 60px auto auto;
  max-width: var(--docsearch-modal-width);
  position: relative;
}

/* Modal Searchbox */
/* Modal Searchbox */
/* Modal Searchbox */
/* Modal Searchbox */
/* Modal Searchbox */
/* Modal Searchbox */
/* Modal Searchbox */
/* Modal Searchbox */

.DocSearch-SearchBar {
  display: flex;
  padding: var(--docsearch-spacing) var(--docsearch-spacing) 0;
  /* background-color: red !important; */
}

.DocSearch-Form {
  align-items: center;
  /* background: red !important; */
  border-radius: 4px;
  box-shadow: none !important;
  display: flex;
  height: var(--docsearch-searchbox-height);
  margin: 0;
  padding: 0 var(--docsearch-spacing);
  position: relative;
  width: 100%;
  outline: none !important;
  border: 2px solid #dbdbdb !important;
}

.DocSearch-Input {
  appearance: none;
  background: transparent;
  border: 0;
  color: var(--docsearch-text-color);
  flex: 1;
  font: inherit;
  font-size: 16px !important;
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  height: 100%;
  outline: none;
  padding: 0 0 0 8px;
  width: 80%;
}

.DocSearch-Input::placeholder {
  color: var(--docsearch-muted-color);
  opacity: 1; /* Firefox */
}

.DocSearch-Input::-webkit-search-cancel-button,
.DocSearch-Input::-webkit-search-decoration,
.DocSearch-Input::-webkit-search-results-button,
.DocSearch-Input::-webkit-search-results-decoration {
  display: none;
}

.DocSearch-LoadingIndicator,
.DocSearch-MagnifierLabel,
.DocSearch-Reset {
  margin: 0;
  padding: 0;
}

.DocSearch-MagnifierLabel,
.DocSearch-Reset {
  align-items: center;
  color: gray !important;
  display: flex;
  justify-content: center;
}

.DocSearch-Container--Stalled .DocSearch-MagnifierLabel {
  display: none;
}

.DocSearch-LoadingIndicator {
  display: none;
}

.DocSearch-Container--Stalled .DocSearch-LoadingIndicator {
  align-items: center;
  color: var(--docsearch-highlight-color);
  display: flex;
  justify-content: center;
}

@media screen and (prefers-reduced-motion: reduce) {
  .DocSearch-Reset {
    animation: none;
    appearance: none;
    background: none;
    border: 0;
    border-radius: 50%;
    color: var(--docsearch-icon-color);
    cursor: pointer;
    right: 0;
    stroke-width: var(--docsearch-icon-stroke-width);
  }
}

.DocSearch-Reset {
  animation: fade-in 0.1s ease-in forwards;
  appearance: none;
  background: none;
  border: 0;
  border-radius: 50%;
  color: var(--docsearch-icon-color);
  cursor: pointer;
  padding: 2px;
  right: 0;
  stroke-width: var(--docsearch-icon-stroke-width);
}

.DocSearch-Reset[hidden] {
  display: none;
}

.DocSearch-Reset:hover {
  color: var(--docsearch-highlight-color);
}

.DocSearch-LoadingIndicator svg,
.DocSearch-MagnifierLabel svg {
  height: 16px !important;
  width: 16px !important;
}

.DocSearch-Cancel {
  display: none;
}

/* Modal Dropdown */

.DocSearch-Dropdown {
  max-height: calc(
    var(--docsearch-modal-height) - var(--docsearch-searchbox-height) -
      var(--docsearch-spacing) - var(--docsearch-footer-height)
  );
  min-height: var(--docsearch-spacing);
  overflow-y: auto; /* firefox */
  overflow-y: overlay;
  padding: 0 var(--docsearch-spacing);
  scrollbar-color: var(--docsearch-muted-color)
    var(--docsearch-modal-background);
  scrollbar-width: thin;
}

.DocSearch-Dropdown::-webkit-scrollbar {
  width: 12px;
}

.DocSearch-Dropdown::-webkit-scrollbar-track {
  background: transparent;
}

.DocSearch-Dropdown::-webkit-scrollbar-thumb {
  background-color: var(--docsearch-muted-color);
  border: 3px solid var(--docsearch-modal-background);
  border-radius: 20px;
}

.DocSearch-Dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.DocSearch-Label {
  color: var(--docsearch-muted-color);
  font-size: 0.75em;
  line-height: 1.6em;
}

.DocSearch-Help {
  color: var(--docsearch-muted-color);
  font-size: 0.9em;
  margin: 0;
  user-select: none;
}

.DocSearch-Title {
  font-size: 1.2em;
}

/* .DocSearch-Logo  {
  display: none !important;
} */
.DocSearch-Logo a {
  display: flex;
}

.DocSearch-Logo svg {
  color: var(--docsearch-logo-color);
  margin-left: 8px;
}

/* Hit */

.DocSearch-Hits:last-of-type {
  margin-bottom: 24px;
}

.DocSearch-Hits mark {
  background: none;
  color: #9b26b6 !important;
}

.DocSearch-HitsFooter {
  color: var(--docsearch-muted-color);
  display: flex;
  font-size: 0.85em;
  justify-content: center;
  margin-bottom: var(--docsearch-spacing);
  padding: var(--docsearch-spacing);
}

.DocSearch-HitsFooter a {
  border-bottom: 1px solid;
  color: inherit;
}

.DocSearch-Hit {
  border-radius: 4px;
  display: flex;
  padding-bottom: 4px;
  position: relative;
  scroll-margin-top: 40px;
}

@media screen and (prefers-reduced-motion: reduce) {
  .DocSearch-Hit--deleting {
    transition: none;
  }
}

.DocSearch-Hit--deleting {
  opacity: 0;
  transition: all 250ms linear;
}

@media screen and (prefers-reduced-motion: reduce) {
  .DocSearch-Hit--favoriting {
    transition: none;
  }
}

.DocSearch-Hit--favoriting {
  transform: scale(0);
  transform-origin: top center;
  transition: all 250ms linear;
  transition-delay: 250ms;
}

.DocSearch-Hit a {
  background: var(--docsearch-hit-background);
  border-radius: 4px;
  box-shadow: var(--docsearch-hit-shadow);
  display: block;
  padding-left: var(--docsearch-spacing);
  width: 100%;
}

.DocSearch-Hit-source {
  background: var(--docsearch-modal-background);
  color: #9b26b6 !important;
  font-size: 0.85em;
  font-weight: 600;
  line-height: 32px;
  margin: 0 -4px;
  padding: 8px 4px 0;
  position: sticky;
  top: 0;
  z-index: 10;
  letter-spacing: 0.06rem !important;
}

.DocSearch-Hit-Tree {
  color: var(--docsearch-muted-color);
  height: var(--docsearch-hit-height);
  opacity: 0.5;
  stroke-width: var(--docsearch-icon-stroke-width);
  width: 24px;
}

.DocSearch-Hit[aria-selected='true'] a {
  background-color: #9b26b6 !important;
}

.DocSearch-Hit[aria-selected='true'] mark {
  text-decoration: underline;
}

.DocSearch-Hit-Container {
  align-items: center;
  color: var(--docsearch-hit-color);
  display: flex;
  flex-direction: row;
  height: var(--docsearch-hit-height);
  padding: 0 var(--docsearch-spacing) 0 0;
}

.DocSearch-Hit-icon {
  color: var(--docsearch-muted-color);
  height: 20px;
  stroke-width: var(--docsearch-icon-stroke-width);
  width: 20px;
}

.DocSearch-Hit-action {
  align-items: center;
  color: var(--docsearch-muted-color);
  display: flex;
  height: 22px;
  stroke-width: var(--docsearch-icon-stroke-width);
  width: 22px;
}

.DocSearch-Hit-action svg {
  display: block;
  height: 18px;
  width: 18px;
}

.DocSearch-Hit-action + .DocSearch-Hit-action {
  margin-left: 6px;
}

.DocSearch-Hit-action-button {
  appearance: none;
  background: none;
  border: 0;
  border-radius: 50%;
  color: inherit;
  cursor: pointer;
  padding: 2px;
}

svg.DocSearch-Hit-Select-Icon {
  display: none;
}

.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-Select-Icon {
  display: block;
}

@media screen and (prefers-reduced-motion: reduce) {
  .DocSearch-Hit-action-button:hover,
  .DocSearch-Hit-action-button:focus {
    background: rgba(0, 0, 0, 0.2);
    transition: none;
  }
}

.DocSearch-Hit-action-button:hover,
.DocSearch-Hit-action-button:focus {
  background: rgba(0, 0, 0, 0.2);
  transition: background-color 0.1s ease-in;
}

@media screen and (prefers-reduced-motion: reduce) {
  .DocSearch-Hit-action-button:hover,
  .DocSearch-Hit-action-button:focus {
    transition: none;
  }
}

.DocSearch-Hit-action-button:hover path,
.DocSearch-Hit-action-button:focus path {
  fill: #fff;
}

.DocSearch-Hit-content-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-weight: 500;
  justify-content: center;
  line-height: 1.2em;
  margin: 0 8px;
  overflow-x: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}

.DocSearch-Hit-title {
  font-size: 0.9em;
  color: #6c6c6c !important;
}

.DocSearch-Hit-path {
  color: var(--docsearch-muted-color);
  font-size: 0.75em;
}

.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-title,
.DocSearch-Hit[aria-selected='true'] mark,
.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-text,
.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-path,
.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-icon,
.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-action,
.DocSearch-Hit[aria-selected='true'] .DocSearch-Hit-Tree {
  color: rgb(95, 94, 94) !important;
}

@media screen and (prefers-reduced-motion: reduce) {
  .DocSearch-Hit-action-button:hover,
  .DocSearch-Hit-action-button:focus {
    background: rgba(0, 0, 0, 0.2);
    transition: none;
  }
}

/* No Results - Start Screen - Error Screen */

.DocSearch-NoResults,
.DocSearch-StartScreen,
.DocSearch-ErrorScreen {
  font-size: 0.9em;
  margin: 0 auto;
  padding: 36px 0;
  text-align: center;
  width: 80%;
}

.DocSearch-Screen-Icon {
  color: var(--docsearch-muted-color);
  padding-bottom: 12px;
}

.DocSearch-NoResults-Prefill-List {
  display: inline-block;
  padding-bottom: 24px;
  text-align: left;
}

.DocSearch-NoResults-Prefill-List ul {
  display: inline-block;
  padding: 8px 0 0;
}

.DocSearch-NoResults-Prefill-List li {
  list-style-position: inside;
  list-style-type: '» ';
}

.DocSearch-Prefill {
  appearance: none;
  background: none;
  border: 0;
  border-radius: 1em;
  color: var(--docsearch-highlight-color);
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: 700;
  padding: 0;
}

.DocSearch-Prefill:hover,
.DocSearch-Prefill:focus {
  outline: none;
  text-decoration: underline;
}

/* Modal Footer */

.DocSearch-Footer {
  align-items: center;
  background: var(--docsearch-footer-background);
  border-radius: 0 0 8px 8px;
  box-shadow: var(--docsearch-footer-shadow);
  display: flex;
  flex-direction: row-reverse;
  flex-shrink: 0;
  height: var(--docsearch-footer-height);
  justify-content: space-between;
  padding: 0 var(--docsearch-spacing);
  position: relative;
  user-select: none;
  width: 100%;
  z-index: 300;
}

.DocSearch-Commands {
  color: var(--docsearch-muted-color);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.DocSearch-Commands li {
  align-items: center;
  display: flex;
}

.DocSearch-Commands li:not(:last-of-type) {
  margin-right: 0.8em;
}

.DocSearch-Commands-Key {
  align-items: center;
  background: var(--docsearch-key-gradient);
  border-radius: 2px;
  box-shadow: var(--docsearch-key-shadow);
  display: flex;
  height: 18px;
  justify-content: center;
  margin-right: 0.4em;
  padding: 0 0 1px;
  color: var(--docsearch-muted-color);
  border: 0;
  width: 20px;
}

/* Hide element accessibly, so that it is still accessible to
assistive tech users */
.DocSearch-VisuallyHiddenForAccessibility {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

/* Responsive */
@media (max-width: 768px) {
  :root {
    --docsearch-spacing: 10px;
    --docsearch-footer-height: 40px;
  }

  .DocSearch-Dropdown {
    height: 100%;
  }

  .DocSearch-Container {
    height: 100vh;
    height: -webkit-fill-available;
    height: calc(var(--docsearch-vh, 1vh) * 100);
    position: absolute;
  }

  .DocSearch-Footer {
    border-radius: 0;
    bottom: 0;
    position: absolute;
  }

  .DocSearch-Hit-content-wrapper {
    display: flex;
    position: relative;
    width: 80%;
  }

  .DocSearch-Modal {
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
    height: -webkit-fill-available;
    height: calc(var(--docsearch-vh, 1vh) * 100);
    margin: 0;
    max-width: 100%;
    width: 100%;
  }

  .DocSearch-Dropdown {
    max-height: calc(
      var(--docsearch-vh, 1vh) * 100 - var(--docsearch-searchbox-height) -
        var(--docsearch-spacing) - var(--docsearch-footer-height)
    );
  }

  .DocSearch-Cancel {
    appearance: none;
    background: none;
    border: 0;
    color: var(--docsearch-highlight-color);
    cursor: pointer;
    display: inline-block;
    flex: none;
    font: inherit;
    font-size: 1em;
    font-weight: 500;
    margin-left: var(--docsearch-spacing);
    outline: none;
    overflow: hidden;
    padding: 0;
    user-select: none;
    white-space: nowrap;
  }

  .DocSearch-Commands {
    display: none;
  }

  .DocSearch-Hit-Tree {
    display: none;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
