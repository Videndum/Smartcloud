# api

## Modules

[Core](api.md#module_Core)[Api](api.md#module_Api)

## Classes

[console](api.md#console) ⇐ `Core`

Defines console actions[Modules](api.md#Modules) ⇐ `Core`

Defines Module / Extension actions[Ping](api.md#Ping) ⇐ `Core`

Ping the Local Host[User](api.md#User) ⇐ `Core`

Defines User Actions

## Core

* [Core](api.md#module_Core)
  * [~Base](api.md#module_Core..Base)
    * [.log\(data, type\)](api.md#module_Core..Base+log) ⇒
  * [~Core](api.md#module_Core..Core) ⇐ `Base`
    * [.debugCheck\(\)](api.md#module_Core..Core+debugCheck)

### Core~Base

Defines Base

**Kind**: inner class of [`Core`](api.md#module_Core)  


#### base.log\(data, type\) ⇒

log Data

**Kind**: instance method of [`Base`](api.md#module_Core..Base)  
**Returns**: logs data to console, sentry and log file as appropriate

| Param | Type | Description |
| :--- | :--- | :--- |
| data | `string` | This is the information to be logged |
| type | `string` | Optional types. Accepts both Numbers & String values |

**Example**

```javascript
try {
 core.user.getUserID(core.license.license_holder_email)
 } catch(response){
   core.log(response,1)
 }
```

### Core~Core ⇐ `Base`

Defines Core

**Kind**: inner class of [`Core`](api.md#module_Core)  
**Extends**: `Base`  
**Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| package | `array` | Access to the Package Json File |
| config | `array` | Access to the Config Json File |
| license | `array` | Access to the License Json File |
| extensions | `array` | Array of extensions |
| log | `function` | Function to log actions and events |
| debugCheck | `function` | Function to check if debugging is active |
| readline | `class` | Class for npm/readline |
| moment | `class` | Class for npm/moment |
| request | `class` | Class for npm/request-promise |
| fs | `class` | Class for npm/fs-extra |
| modules | `class` | Class to access modules |
| user | `class` | Class to access user functions |
| version | `string` | String with current version |

#### core.debugCheck\(\)

Check to see if debug is active

**Kind**: instance method of [`Core`](api.md#module_Core..Core)  
**Example**

```javascript
if (command = debug) {
 core.debugCheck()
}
```

## Api

### Api~apiRoute

Import each API Module

**Kind**: inner constant of [`Api`](api.md#module_Api)  


## console ⇐ `Core`

Defines console actions

**Kind**: global class  
**Extends**: `Core`  


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

## Ping ⇐ `Core`

Ping the Local Host

**Kind**: global class  
**Extends**: `Core`  


### new Ping\(user\)

**Returns**: \[description\]

| Param | Description |
| :--- | :--- |
| user | using the UserInterface interface |

## User ⇐ `Core`

Defines User Actions

**Kind**: global class  
**Extends**: `Core`

* [User](api.md#User) ⇐ `Core`
  * [.getUserID\(user\)](api.md#User+getUserID) ⇒
  * [.getUsername\(user\)](api.md#User+getUsername) ⇒

### user.getUserID\(user\) ⇒

Get user from database

**Kind**: instance method of [`User`](api.md#User)  
**Returns**: \[description\]

| Param | Description |
| :--- | :--- |
| user | using the UserInterface interface |

### user.getUsername\(user\) ⇒

Get username from database

**Kind**: instance method of [`User`](api.md#User)  
**Returns**: \[description\]

| Param | Description |
| :--- | :--- |
| user | using the UserInterface interface |

