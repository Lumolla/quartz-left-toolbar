import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export default (() => {
  const LeftToolbar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`left-icon-toolbar ${displayClass ?? ""}`}>
        <a href="/" class="toolbar-btn toolbar-home" title="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>

        <button id="toolbar-theme-toggle" class="toolbar-btn" title="Toggle Theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>

        <div class="toolbar-divider"></div>

        <div class="toolbar-ratings">
          <label class="rating-toggle" title="Safe">
            <input type="checkbox" id="filter-safe" checked />
            <span class="rating-dot safe"></span>
          </label>
          <label class="rating-toggle" title="Suggestive">
            <input type="checkbox" id="filter-suggestive" />
            <span class="rating-dot suggestive"></span>
          </label>
          <label class="rating-toggle" title="Questionable">
            <input type="checkbox" id="filter-questionable" />
            <span class="rating-dot questionable"></span>
          </label>
          <label class="rating-toggle" title="Explicit">
            <input type="checkbox" id="filter-explicit" />
            <span class="rating-dot explicit"></span>
          </label>
        </div>
      </div>
    )
  }

  return LeftToolbar
}) satisfies QuartzComponentConstructor