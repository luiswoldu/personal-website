/**
 * The two-bar mark that folds into an X. Structure matters: the outer span of
 * each bar is translated, the inner one is rotated. Timing lives in globals.css
 * under .nav-mark, driven by [data-nav-open] on an ancestor.
 */
export default function NavMark() {
  return (
    <span aria-hidden className="nav-mark">
      <span className="nav-mark-bar">
        <span className="nav-mark-line" />
      </span>
      <span className="nav-mark-bar">
        <span className="nav-mark-line" />
      </span>
    </span>
  );
}
