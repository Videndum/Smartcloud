# api

## Modules

[Api](api.md#module_Api)

## Classes

[Modules](api.md#Modules) ⇐ `Core`

Defines Module / Extension actions

## Api

### Api~apiRoute

Import each API Module

**Kind**: inner constant of [`Api`](api.md#module_Api)  


## Modules ⇐ `Core`

Defines Module / Extension actions

**Kind**: global class  
**Extends**: `Core`  
**Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| loadExtensions | `function` | Load all modules / Extensions |

### modules.loadExtensions\(\)

Loads the modules

**Kind**: instance method of [`Modules`](api.md#Modules)  
**Example**

```javascript
if (opts === reload)
 {
 core.modules.loadExtensions()
 }
```

