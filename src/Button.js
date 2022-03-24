function Button(props) {
  let styles = 'border border-gray-300 rounded-full px-3 text-sm font-bold '
  if (props.outline) {
    styles += 'text-gray-300 '
  } else {
    styles += 'bg-gray-300 text-reddit_dark '
  }
  return <button {...props} className={styles + props.className} />
}

export default Button
