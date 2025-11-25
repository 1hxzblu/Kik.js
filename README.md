Usage Made Simple

Creating Elements Quickly
```
// A navigation table
Kik("create table 4 Home Help Game About")

// A fruit list
Kik("create list 3 apple banana strawberry")

// Some divs
Kik("create div 3 home help about")

// Buttons
Kik("create button 2 login signup")

// A heading
Kik("create h1 Welcome to My Website")

// Some text
Kik("text This is a sample text")
```
Advanced Element Creation
```
// Add an image
Kik("create img 1 https://examplecom/imagejpg Alt Text")

// Create a link
Kik("create a 1 Visit Google https://googlecom")

// Input field
Kik("create input 1 username Enter your username")

// Textarea
Kik("create textarea 1 message Enter your message")

// Dropdown select
Kik("create select 3 Option1 Option2 Option3")

Components You Will Love

// Modal window
const modal = Kik("create modal 1 Modal Title This is modal content")

// Card
const card = Kik("create card 1 Card Title This is card content")

// Section
const section = Kik("create section 1")

// Container
const container = Kik("create container 1")
```



Styling Made Easy
```
// Set multiple styles at once
KikStyles.set('elementid', {
    color: '#e74c3c',
    background: '#f8f9fa',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
})

// Individual style methods
KikStyles.setColor('elementid', '#e74c3c')
KikStyles.setBackground('elementid', '#f8f9fa')
KikStyles.setFontSize('elementid', '16px')
KikStyles.setPadding('elementid', '15px')

```
