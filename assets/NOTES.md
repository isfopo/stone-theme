# VSCode theme implementation notes

## Patterns

- Use primary color to show hover/active focus and backgrounds. Use different
  levels of opacity to provide contrast.
- Use secondary color to show matching input values

## Lists and trees

- Includes file list view, individual notifications, autosuggest list, command
  suggest lists...
- Consider the different user flows that lists need to support when theming...
  Lists like the file explorer are usually interacted with mouse movements and
  may not need much theming, but lists like the project dropdown select are
  usually interacted with using they keyboard and need appropriate feedback for
  that.

## Notifications

### The slide up notifications in bottom left\_

- The list of notifications seems to fall under the theming group of 'lists',
  theme values for list hover and selection are applied to individual
  notifications.
- The hover background for notifications is set by the 'list.hoverBackground'!

## Search behaviors

When using search, the first instance of a search match is highlighted, this is
the `findMatch` values. Additional instances of a search match are the
`findMatchHighlight` value.

When searching within a selection by selecting the lines icon or `alt+cmd+l` the
`findRangeHighlight` theming is applied to the entire selected range.

## Project manager extension

- The dropdown of available projects seems to have this issue: The text color
  inside the dropdown should be list.focusForeground when using keyboard to
  navigate the list, but it doesn't change.

## Non Mac elements

It appears the menu bar and dropdowns only shows in Windows/Linux?

## Unknowns

What these theme values impact isn't really known, they're left blank to try and
make them show themselves.

- selection.background
- descriptionForeground
- errorForeground
- textCodeBlock.background
- textSeparator.foreground
- list.inactiveFocusBackground
- editorHint.foreground
- editorUnnecessaryCode.border

## Theming Notes

### These notes are from learning about VSCode features in order to theme them\_

## File picker dropdown

The background color of the file picker dropdown is "sideBar.background" for
some reason! 😖

## Highlights

- **Current line highlight:** Current line highlight uses a low opacity so that
  it doesn't interfere with content. It is displayed for the line the cursor is
  in and creates the "base" highlight.
- **Current range highlight:** Highlights ranges of current matches, including
  the currently selected match for find and currently selected symbol in Go to
  symbol. Color is similar to line highlight, just slightly brighter because it
  is more active. No border is included.
- **Current selection highlight:** The current selection highlight uses a
  lighter purple to allow for better contrast of selected text while not being
  overwhelming for multiline selections. When selecting text, additional matches
  are highlighted with a subtler background and border of the same shade. The
  border is not an opacity to provide a base for layering other highlights on
  top of (such as the symbol access).
- **Find highlights:** Most bold to make it easy to see fin matches Has to
  overlay the current selection border...
- **Symbol access highlights:** VSCode highlights read and write access to
  symbols. This is themed with lighter colors using opacity because they often
  appear at the same time as the current selection highlight
- **Debugging highlights:** Breakpoints are highlighted and the current call
  stack can be navigated with a different highlight
- **Snippets highlights:** Coming soon!
