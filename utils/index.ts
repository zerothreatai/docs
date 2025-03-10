import type { Collection, ParsedContentFile } from "@nuxt/content";

export function findPageHeadline(page: ParsedContentFile): string {
    return page.navigation?.title ? page.navigation.title : splitByCase(page.navigation).map(p => upperFirst(p)).join(' ')
}