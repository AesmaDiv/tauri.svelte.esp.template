<script lang="ts">
  import { onMount } from "svelte";
  import { getInheritedColor, getInheritedBackgroundColor } from "../funcs/shared";

  export let title: string = "Заголовок";
  export let value: string = "";

  export let option_key: string = 'name';
  export let options: any[] = [
    { name: "Name1", value: 1},
    { name: "Name2", value: 2},
    { name: "Name3", value: 3},
    { name: "Name4", value: 4},
    { name: "Name5", value: 5},
    { name: "Name6", value: 6},
    { name: "Name7", value: 7},
    { name: "Name8", value: 8},
    { name: "Name9", value: 9},
  ];

  let root: HTMLDivElement;
  let label: HTMLLabelElement;
  let input: HTMLInputElement;
  let select: HTMLSelectElement;

  const labelTop = ['0.5em', '-0.55em'];
  const labelSize = ['100%', '60%'];
  const labelPadding = ['0.07em', '0.07em .2em'];

  onMount(() => {
    console.log($$props);
    $$props.backgroundColor ??= getInheritedBackgroundColor(root);
    $$props.color ??= getInheritedColor(root);
  })

  function onFocus(event: MouseEvent) {
    if (input?.value || select?.value) return;
    const ind = { mouseleave: 0, mouseenter: 1}[event.type];
    label.style.setProperty("--labelTop", labelTop[ind]);
    label.style.setProperty("--labelSize", labelSize[ind]);
    label.style.setProperty("--labelPadding", labelPadding[ind]);
  }
</script>

<div bind:this={root} class="root"
  style="
  --backgroundColor: {$$props.backgroundColor};
  --borderColor: {$$props.borderColor || $$props.color};
  --color: {$$props.color};
  --width: {$$props.width};
  --fontSize: {$$props.fontSize};
  --labelTop: {labelTop[+!!value]};
  --labelSize: {labelSize[+!!value]};
  --labelPadding: {labelPadding[+!!value]};
  "
  >
  <div class="decor" on:mouseleave={onFocus} on:mouseenter={onFocus}>
    <label bind:this={label} for="input">{title}</label>
    {#if $$props.select}
      <select bind:this={select} class="input">
        <option selected value></option>
        {#each options as option}
          <option class="input" value={option}>{option[option_key]}</option>
        {/each}
      </select>
    {:else}
      <input bind:this={input} class="input" value="{value}">
    {/if}
  </div>
</div>

<style>
  .root {
    width: fit-content;
    height: fit-content;
    padding: 0.3em 2px 2px;
    overflow: hidden;
    outline: 1px solid blue;
    color: var(--color);
    background-color: var(--backgroundColor);
    font-size: var(--fontSize);
  }
  .decor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: var(--width);
    border: 2px solid var(--borderColor);
    font-size: var(--fontSize);
    border-radius: 1ch;
    position: relative;
    padding: 0.5em;
  }
  input, select, option {
    all: unset;
    width: 100%;
    line-height: 1em;
    overflow: visible;
    background-color: var(--backgroundColor);
    outline: 1px solid aqua;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  label {
    all: unset;
    width: fit-content;
    white-space: nowrap;
    line-height: 1em;
    background-color: var(--backgroundColor);

    position: absolute;
    top: var(--labelTop);
    font-size: var(--labelSize);
    padding: var(--labelPadding);

    transition-property: top, font-size, padding;
    transition-duration: 150ms;
    transition-timing-function: linear;
    outline: 1px solid fuchsia;
  }
  select {
    padding-top: 0.07em;
    padding-bottom: 0.07em;
  }
</style>