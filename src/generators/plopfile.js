module.exports = plop => {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Insert a name for the component'
      },
      {
        type: 'list',
        name: 'category',
        choices: ['shared', 'views', 'layout', 'infra', 'patterns'],
        message: 'Select a category for the component'
      },
      {
        type: 'input',
        name: 'wrapperTag',
        message: 'Type the wrapper tag for the component: ',
        default: 'div'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{ dashCase category }}/{{ pascalCase name }}/index.tsx',
        templateFile: './templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../components/{{ dashCase category }}/{{ pascalCase name }}/styles.ts',
        templateFile: './templates/component/styles.ts.hbs'
      }
    ]
  }),
    plop.setGenerator('icon', {
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Insert a name for the icon'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../components/shared/Icons/{{ pascalCase name }}.tsx',
          templateFile: './templates/iconComponent.tsx.hbs'
        }
      ]
    })
}
