/* eslint-disable */
export default {
  componentName: 'Page',
  fileName: 'compose',
  props: {
  },
  children: [
    {
      "componentName": "Menu",
      "props": {
        "style": {
          "width": 200
        }
      },
      "children": [
        {
          "componentName": "MenuItem",
          "props": {
          },
          "children": "Option 1"
        },
        {
          "componentName": "MenuItem",
          "props": {
          },
          "children": "Option 2"
        }
      ]
    }
  ]
};