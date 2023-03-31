<script lang="ts">
  import List from "./lib/List.svelte";
  import type { ListHeader, ListItem } from "./lib/List.svelte";
    import TextBox from "./lib/TextBox.svelte";

  const header: ListHeader = { id: '№', date: 'Дата', order: 'Наряд-заказ'};
  const items: ListItem[] = [
    { id:  1, date: '2023.03.01', order: '123' },
    { id:  2, date: '2023.03.02', order: '124' },
    { id:  3, date: '2023.03.03', order: '125' },
    { id:  4, date: '2023.03.04', order: '126' },
    { id:  5, date: '2023.03.05', order: '127' },
    { id:  6, date: '2023.03.06', order: '128' },
    { id:  7, date: '2023.03.07', order: '129' },
    { id:  8, date: '2023.03.10', order: '130' },
    { id:  9, date: '2023.03.11', order: '131' },
    { id: 10, date: '2023.03.12', order: '132' },
    { id: 11, date: '2023.03.13', order: '133' },
    { id: 12, date: '2023.03.14', order: '134' },
    { id: 13, date: '2023.03.15', order: '135' },
    { id: 14, date: '2023.03.16', order: '136' },
    { id: 15, date: '2023.03.17', order: '137' },
    { id: 16, date: '2023.03.20', order: '138' },
    { id: 17, date: '2023.03.21', order: '139' },
    { id: 18, date: '2023.03.22', order: '140' },
    { id: 19, date: '2023.03.23', order: '141' },
    { id: 20, date: '2023.03.24', order: '142' },
    { id: 21, date: '2023.03.25', order: '143' },
  ];

  const onListSelect = (val: ListItem) : ListItem => {
    console.log(val);
    return undefined;
  }
</script>

<main id="root">
  <div class="container">
    <List header={header} items={items} onSelect={onListSelect}/>
  </div>
  <div class="container1">
    <TextBox title="Заголовок" width="10ch" fontSize="40px" value=""/>
    <TextBox title="Заголовок" width="10ch" fontSize="50px" value="" select/>
  </div>
</main>

<style>
  #root {
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: inherit;
  }
  .container, .container1 {
    width: 400px;
    height: 400px;
    border: 1px solid green;
  }
  .container1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: inherit;
    background-color: inherit;
    padding: 50px;
  } 


</style>