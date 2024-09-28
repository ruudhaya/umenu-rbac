# Menu Component

This `Menu` component is a flexible and customizable menu system for React applications. It supports both horizontal and vertical orientations and allows for nested sub-menus.

## JSON Schema

The `Menu` component expects the menu data to follow a specific JSON schema. You can find the schema definition below:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "MenuData",
  "type": "object",
  "properties": {
    "menuData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "The name of the menu item"
          },
          "page": {
            "type": "string",
            "description": "The page route for the menu item"
          },
          "subMenu": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "description": "The name of the sub-menu item"
                },
                "page": {
                  "type": "string",
                  "description": "The page route for the sub-menu item"
                }
              },
              "required": ["name", "page"],
              "additionalProperties": false
            },
            "description": "An array of sub-menu items"
          }
        },
        "required": ["name", "page"],
        "additionalProperties": false
      }
    }
  },
  "required": ["menuData"],
  "additionalProperties": false
}```

## Example Usage
Here is an example of how to use the Menu component with sample data:

### Sample Data
```json
{
  "menuData": [
    {
      "name": "Dashboard",
      "page": "dashboard",
      "subMenu": [
        {
          "name": "Overview",
          "page": "overview"
        },
        {
          "name": "Stats",
          "page": "stats"
        }
      ]
    },
    {
      "name": "Settings",
      "page": "settings",
      "subMenu": [
        {
          "name": "Profile",
          "page": "profile"
        },
        {
          "name": "Security",
          "page": "security"
        }
      ]
    },
    {
      "name": "Reports",
      "page": "reports",
      "subMenu": [
        {
          "name": "Annual",
          "page": "annual"
        },
        {
          "name": "Monthly",
          "page": "monthly"
        }
      ]
    }
  ]
}
```

## Component Usage

```jsx
    <Menu data={menuData} orientation="horizontal" />
```

## Props
- data: An array of menu items following the JSON schema.
- orientation: A string that can be either horizontal or vertical to set the menu orientation.

## CSS
The component uses the following CSS classes to style the menu:

- .menu-container.horizontal: Styles for the horizontal menu.
- .menu-container.vertical: Styles for the vertical menu.
- .collapsed: Styles for collapsed sub-menus.
- .expanded: Styles for expanded sub-menus.

You can customize these classes in the Menu.css file to match your application's design.

## License
This project is licensed under the MIT License.