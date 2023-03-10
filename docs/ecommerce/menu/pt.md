# description

---

Menus dropdown sao muito comuns em menus de navegacao para desktops em
ecommerce. Exemplos sao encontrados na versao desktop do
[starter fashion](https://fashion.deco.site/ "https://fashion.deco.site/").

![menu.gif](files/c4786b91-aa1b-4f17-8218-51799f0ac16a "")

Desenvolvedores podem ficar tentados a usar JavaScript, mais especificamente a
funçāo `onmouseover`, para adicionar esse tipo de interatividade. Contudo, esse
comportamento é possivel de ser replicado somente com HTML e CSS, entregando uma
performance optimal para dispositivos moveis e desktop.

O grande segredo desse tipo de menu é a utilizacao da classe \`group\` do twind.
Com ela, conseguimos fazer o menu ficar visivel dependendo do elemento sendo
sobreposto.

Por exemplo, suponha o seguinte codigo:

```
function Menu (){
  return (
    <div class="group">
      Menu Item 1
      <ul class="hidden group-hover:block">
        <li>Subitem 1</li>
        <li>Subitem 2</li>
        <li>Subitem 3</li>
      </ul>
    </div>
  );
}
```

Nesse exemplo, temos que a tag `div` tem a classe `group`. Isso significa que
podemos reagir a eventos que acontecem sobre essa `div`. Nesse caso, reagimos ao
hover com o seletor `group-hover:`, trocando o submenu que inicialmente estava
`hidden` para `block`, e fazendo-o aparecer.\
\
Veja esse codigo em acao no
[repositorio de receitas](https://github.com/deco-sites/recipes/blob/main/components/dropdown-menu.tsx "https://github.com/deco-sites/recipes/blob/main/components/dropdown-menu.tsx")
e em producao na
[fashion](https://github.com/deco-sites/fashion/blob/5355889544df8b3943204e6141385865c6307ae3/components/header/NavItem.tsx#L16 "https://github.com/deco-sites/fashion/blob/5355889544df8b3943204e6141385865c6307ae3/components/header/NavItem.tsx#L16")
