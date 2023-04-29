import TesteIsland from "../islands/TesteIsland.tsx"

export interface Item {
    label: string;
    href: string;
}
export interface Props {
    sections: Item[];
}

function Teste({sections}: Props) {
  return (
    <div>
        <TesteIsland sections={sections}/>
    </div>
  )
}

export default Teste