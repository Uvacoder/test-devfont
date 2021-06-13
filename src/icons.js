/**
 * Based on Feather Icons
 * See https://github.com/feathericons/feather
 */

import Icon from "./icon"
import icons from "../dist/icons.json"
import tags from "../data/tags.json"

export default Object.keys(icons)
  .map(key => new Icon(key, icons[key], tags[key]))
  .reduce((object, icon) => {
    object[icon.name] = icon
    return object
  }, {})
