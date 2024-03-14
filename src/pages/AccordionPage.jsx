import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '234234',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project. You can use React on any project.You can use React on any project.You can use React on any project.You can use React on any project.You can use React on any project.',
    },
    {
      id: '2asdfasdf',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project. You can use React on any project.You can use React on any project.You can use React on any project.You can use React on any project.You can use React on any project.',
    },
    {
      id: 'asdf2',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project. You can use React on any project.You can use React on any project.You can use React on any project.You can use React on any project.You can use React on any project.',
    },
  ]

  return <Accordion items={items} />
}

export default AccordionPage