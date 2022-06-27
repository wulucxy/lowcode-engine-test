/* eslint-disable */
export default {
  componentName: 'Page',
  fileName: 'antd',
  props: {
  },
  children: [
    {
      componentName: 'Dropdown',
      props: {
        overlay: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Menu',
              "props": {
                "style": {
                  "width": 200
                }
              },
              children: [
                {
                  componentName: 'MenuItem',
                  id: 'node_ocky01yzdq3',
                  props: {
                    key: 'timeLinei5wd',
                    category: 'Item',
                    title: '菜单名',
                  },
                  children: '菜单名',
                },
              ],
            },
          ],
        },
      },
      children: [{
          componentName: 'Button',
          props: {
            type: 'link',
            children: '按钮'
          },
        },]
    },
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
          id: 'node_abcced1yzdq3',
          "props": {
          },
          "children": "Option 1"
        },
        {
          "componentName": "MenuItem",
          id: 'node_cedafadfd1yzdq3',
          "props": {
          },
          "children": "Option 2"
        }
      ]
    }
  ]
};