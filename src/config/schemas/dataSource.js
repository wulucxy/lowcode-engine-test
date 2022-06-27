export default {
  componentName: 'Page',
  fileName: 'dataSource',
  props: {},
  children: [{
    componentName: 'Div',
    props: {},
    children: [{
      componentName: 'Text',
      props: {
        text: {
          type: 'JSExpression',
          value: 'this.dataSourceMap.todos.status'
        },
      },
    }, {
      componentName: 'Switch',
      props: {
        checkedChildren: '开',
        unCheckedChildren: '关',j 
        checked: '{{this.item.done}}',
      },
    }],
    loop: '{{this.dataSourceMap.todos.data}}',
  }],
  dataSource: {
    list: [{
      id: 'todos',
      isInit: true,
      type: 'fetch',
      options: {
        method: 'GET',
        uri: 'https://jsonplaceholder.typicode.com/todos',
      },
      dataHandler: function dataHandler(data) {
        return data;
      },
    }],
  },
};