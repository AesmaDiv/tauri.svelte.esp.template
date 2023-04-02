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

  const labelTop = ['.3em', '-0.6em'];
  const labelLeft = ['.3em', '.8em'];
  const labelSize = ['100%', '60%'];
  const labelPadding = ['0.07em', '0.07em .2em'];
  const labelOpacity = ['30%', '100%']

  onMount(() => {
    console.log($$props);
    $$props.backgroundColor ??= getInheritedBackgroundColor(root);
    $$props.color ??= getInheritedColor(root);
  })

  function onFocus(event: MouseEvent) {
    if (input?.value || select?.value) return;
    const ind = { mouseleave: 0, mouseenter: 1}[event.type];
    label.style.setProperty("--labelTop", labelTop[ind]);
    label.style.setProperty("--labelLeft", labelLeft[ind]);
    label.style.setProperty("--labelSize", labelSize[ind]);
    label.style.setProperty("--labelPadding", labelPadding[ind]);
    label.style.setProperty("--labelOpacity", labelOpacity[ind]);
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
  --labelLeft: {labelLeft[+!!value]};
  --labelSize: {labelSize[+!!value]};
  --labelPadding: {labelPadding[+!!value]};
  --labelOpacity: {labelOpacity[+!!value]};
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

    color: var(--color);
    font-size: var(--fontSize);
    background-color: var(--backgroundColor);
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
    padding: 0.3em;
  }
  input, select, option {
    all: unset;
    width: 100%;
    line-height: 1em;
    overflow: visible;
    background-color: var(--backgroundColor);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  select {
    padding-top: 0.07em;
    padding-bottom: 0.07em;
  }
  label {
    all: unset;
    width: fit-content;
    white-space: nowrap;
    line-height: 1em;
    background-color: var(--backgroundColor);

    position: absolute;
    top: var(--labelTop);
    left: var(--labelLeft);
    padding: var(--labelPadding);
    opacity: var(--labelOpacity);
    font-size: var(--labelSize);

    transition-property: top, left, padding, opacity, font-size;
    transition-duration: 150ms;
    transition-timing-function: linear;
  }

</style>