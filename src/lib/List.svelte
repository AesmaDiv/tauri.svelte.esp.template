<script context="module" lang="ts">
  export type ListHeader = {[key: string]: string};
  export type ListItem = {[key: string]: any};
</script>
<script lang="ts">
  export let onSelect: Function;
  export let header: ListHeader;
  export let items: ListItem[];

  export let header_color: string = '#202000';
  export let row_color: string = '#000000';

  let table: HTMLTableElement;

  function _onSelect(event: MouseEvent) {
    // Removing className "selected" from previous selected row
    const selected: HTMLTableRowElement = <HTMLTableRowElement>table.getElementsByClassName('row-selected')[0];
    selected && selected.classList.remove('row-selected');
    // Adding className "selected" to newly selected row
    const cell: HTMLTableCellElement = <HTMLTableCellElement>event.target;
    const row: HTMLTableRowElement = <HTMLTableRowElement>cell.parentNode;
    row && row.classList.add('row-selected');

    // Ruducing ListItem from children cells
    const result: ListItem = Array.prototype.slice.call(row.children).reduce(
      (item: ListItem, cell: HTMLTableCellElement) => {
        item[cell.getAttribute('itemprop')] = cell.innerText;
        return item;
    }, {});

    // Returning selected ListItem from component
    onSelect && onSelect(result);
  }
</script>


<div class="root">
  <table bind:this={table}>
    <thead>
      <tr class="header">
        {#each Object.values(header) as title}
          <th class="cell" style="--color: {header_color}">{title}</th>
          {/each}
      </tr>
    </thead>
    <tbody>
      {#each items as item}
      <tr class="row" on:click={_onSelect} style="--color: {row_color}">
        {#each Object.entries(item) as [key, val]}
        <td class="cell" itemprop={key}>{val}</td>
        {/each}
      </tr>
      {/each}
    </tbody>
  </table>
</div>
    
<style global>
  .root {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    position: relative;
  }
  table {
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
  }
  th {
    cursor: default;
    position: sticky;
    top: 0;
    background-color: var(--color);
  }
  th, td {
    border: 1px solid gray;
  }
  td {
    padding-left: 5px;
    border-right: hidden;
  }
  .row {
    background-color: var(--color);
    cursor: pointer;
  }
  .row:hover {
    background-color: blue;
  }
  .row-selected {
    background-color: blueviolet;
  }
</style>