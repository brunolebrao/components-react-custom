import { configure, addParameters } from "@storybook/react"
import packageJson from "../package.json"

addParameters({
  options: {
    name: "React Custom Components",
    url: packageJson.repository.url,
    showAddonPanel: false
  }
})

function loadStories () {
  require("../stories/index.js")
  // You can require as many stories as you need.
}

configure(loadStories, module)
