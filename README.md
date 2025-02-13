

---

# React Dashboard Kit

React Dashboard Kit is a collection of reusable, customizable, and responsive components designed to help you build modern dashboards and admin panels quickly. This library includes a variety of components such as cards, modals, tables, forms, and more, all styled with Tailwind CSS for easy integration into your projects.

## Installation

To install the React Dashboard Kit, run the following command:

```bash
npm i react-dashboard-kit
```

---

## Components

### 1. **Card Component (`Card.jsx`)**

#### **Purpose:**
The `Card` component is a reusable UI element designed to display information in a structured and visually appealing manner. It can be used for various purposes such as displaying blog posts, products, user profiles, etc.

#### **Props:**
- **`image`**: (String) URL of the image to display. Falls back to a placeholder if not provided.
- **`title`**: (String) Main heading of the card.
- **`subtitle`**: (String, Optional) Subheading under the title, useful for extra context like a category or price.
- **`content`**: (String, Optional) The main text or description inside the card. Truncated to 5 lines using `line-clamp-5`.
- **`tags`**: (Array of Strings, Optional) Array of strings, displayed as small labels under the content.
- **`onEdit`**: (Function, Optional) Function to handle the edit action. The edit button appears if this function is provided.
- **`onDelete`**: (Function, Optional) Function to handle the delete action. The delete button appears if this function is provided.

#### **Usage:**
```jsx
import { Card } from 'react-dashboard-kit';

<Card
  image="https://example.com/image.jpg"
  title="Card Title"
  subtitle="Subtitle"
  content="This is the main content of the card."
  tags={["Tag1", "Tag2"]}
  onEdit={() => console.log("Edit clicked")}
  onDelete={() => console.log("Delete clicked")}
/>
```

---

### 2. **Sidebar Component (`DashboardSidebar.jsx`)**

#### **Purpose:**
The `Sidebar` component is a responsive navigation bar that can be used in dashboards. It adjusts its layout based on the screen size, displaying as a vertical sidebar on desktop and a bottom navigation bar on mobile devices.

#### **Props:**
- **`isOpen`**: (Boolean) Controls whether the sidebar is expanded or collapsed.
- **`items`**: (Array of Objects) Represents the sidebar items with `title` and `Icon` properties.

#### **Usage:**
```jsx
import { Sidebar } from 'react-dashboard-kit';

const items = [
  { title: "Dashboard", Icon: DashboardIcon },
  { title: "Settings", Icon: SettingsIcon },
];

<Sidebar isOpen={true} items={items} />
```

---

### 3. **Navbar Component (`DashboardNavbar.jsx`)**

#### **Purpose:**
The `Navbar` component is a top navigation bar that includes a logo, a menu button to toggle the sidebar, and a logout button.

#### **Props:**
- **`logo`**: (String) URL of the custom logo. Falls back to a placeholder if not provided.
- **`isSidebarOpen`**: (Boolean) Determines the state of the sidebar (open/closed).
- **`setIsSidebarOpen`**: (Function) Function to toggle the sidebar visibility.
- **`onLogout`**: (Function) Callback function triggered when the logout icon is clicked.

#### **Usage:**
```jsx
import { Navbar } from 'react-dashboard-kit';

<Navbar
  logo="https://example.com/logo.png"
  isSidebarOpen={true}
  setIsSidebarOpen={setIsSidebarOpen}
  onLogout={() => console.log("Logged out")}
/>
```

---

### 4. **TableDetailedView Component (`TableDetailedView.jsx`)**

#### **Purpose:**
The `TableDetailedView` component is used to display a list of contact requests in a table format, with the ability to view detailed information about a specific contact and delete contacts.

#### **Usage:**
```jsx
import { TableDetailedView } from 'react-dashboard-kit';

<TableDetailedView />
```

---

### 5. **ArrayField Component (`ArrayField.jsx`)**

#### **Purpose:**
The `ArrayField` component is a reusable form field that allows users to input multiple values in a list format. Users can add or remove items from the list.

#### **Props:**
- **`fieldName`**: (String) Name of the field.
- **`values`**: (Array) Array of values to be displayed in the input fields.
- **`onChange`**: (Function) Function to handle changes in the input fields.
- **`onAdd`**: (Function) Function to add a new input field.
- **`onRemove`**: (Function) Function to remove an input field.
- **`placeholder`**: (String) Placeholder text for the input fields.

#### **Usage:**
```jsx
import { ArrayField } from 'react-dashboard-kit';

<ArrayField
  fieldName="tags"
  values={tags}
  onChange={(index) => (e) => handleChange(index, e)}
  onAdd={handleAdd}
  onRemove={(index) => () => handleRemove(index)}
  placeholder="Tag"
/>
```

---

### 6. **DateInputField Component (`DateInputField.jsx`)**

#### **Purpose:**
The `DateInputField` component is a reusable date input field that can be used in forms.

#### **Props:**
- **`id`**: (String) ID of the input field.
- **`name`**: (String) Name of the input field.
- **`value`**: (String) Value of the input field.
- **`onChange`**: (Function) Function to handle changes in the input field.
- **`placeholder`**: (String) Placeholder text for the input field.
- **`required`**: (Boolean) Determines if the input field is required.

#### **Usage:**
```jsx
import { DateInputField } from 'react-dashboard-kit';

<DateInputField
  id="date"
  name="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  placeholder="Select Date"
  required={true}
/>
```

---

### 7. **Modal Component (`Modal.jsx`)**

#### **Purpose:**
The `Modal` component is a reusable modal dialog that can be used for various purposes such as confirmations, form inputs, or displaying important information.

#### **Props:**
- **`isOpen`**: (Boolean) Determines whether the modal is visible or not.
- **`onClose`**: (Function) Function to handle the closing of the modal.
- **`title`**: (String) The title displayed in the modal header.
- **`children`**: (React Node) The content of the modal.
- **`ariaLabelClose`**: (String, Optional) The accessible label for the close button (defaults to "Close modal").
- **`maxWidth`**: (String, Optional) Defines the maximum width of the modal (e.g., `sm`, `md`, `lg`). Defaults to `sm`.

#### **Usage:**
```jsx
import { Modal } from 'react-dashboard-kit';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
  ariaLabelClose="Close modal"
  maxWidth="md"
>
  <p>Modal content goes here.</p>
</Modal>
```

---

### 8. **Tabs Component (`Tabs.jsx`)**

#### **Purpose:**
The `Tabs` component is a reusable tabbed interface that allows users to switch between different content sections.

#### **Props:**
- **`content`**: (Array of Objects) An array of objects representing each tab. Each object should contain:
  - **`title`**: (String) The title of the tab.
  - **`content`**: (React Node) The content to display when this tab is active.
  - **`icon`**: (React Node, Optional) The icon displayed beside the tab title.

#### **Usage:**
```jsx
import { Tabs } from 'react-dashboard-kit';

const tabsContent = [
  { title: "Tab 1", content: <p>Content for Tab 1</p>, icon: <Tab1Icon /> },
  { title: "Tab 2", content: <p>Content for Tab 2</p>, icon: <Tab2Icon /> },
];

<Tabs content={tabsContent} />
```

---

### 9. **Dashboard Component (`Dashboard.jsx`)**

#### **Purpose:**
The `Dashboard` component serves as the primary layout for presenting an overview of statistics and key metrics. It dynamically fetches data for each statistic (if required) and renders a grid of `StatCard` components. Designed for flexibility and reusability, this component can accommodate various dashboard layouts.

#### **Props:**
- **`stats`**: (Array of Objects) An array of objects representing each statistic to be displayed. Each object should include:
  - **`title`**: (String) The title of the statistic.
  - **`count`**: (Number or String) The value or count to display for the statistic.
  - **`icon`**: (React Node) The icon to display alongside the statistic.
  - **`bg`**: (String) The background color or class for the `StatCard`.
  - **`url`**: (String, Optional) The API endpoint to fetch data dynamically. If provided, the `DataFetcher` component will be used to fetch and update the statistic.
  - **`setter`**: (Function, Optional) The function to update the statistic's data after fetching.
  - **`requiresData`**: (Boolean, Optional) Determines whether the statistic requires data fetching.
  - **`redirectUrl`**: (String, Optional) The URL to redirect to when the `StatCard` is clicked. If not provided, the `setActiveContent` function will be used instead.
- **`setActiveContent`**: (Function) A callback function to handle the click event on a `StatCard` (used when `redirectUrl` is not provided).

#### **Usage:**
```jsx
import React from "react";
import { Dashboard } from 'react-dashboard-kit';
import { FaUsers, FaChartLine, FaBox, FaMoneyBill } from "react-icons/fa";

const stats = [
  {
    title: "Total Users",
    count: 1500,
    icon: <FaUsers />,
    bg: "bg-blue-500",
    url: "/api/users",
    setter: (data) => setUserCount(data.count),
    requiresData: true,
  },
  {
    title: "Sales",
    count: "$50,000",
    icon: <FaChartLine />,
    bg: "bg-green-500",
    redirectUrl: "/sales",
  },
  {
    title: "Products",
    count: 120,
    icon: <FaBox />,
    bg: "bg-purple-500",
  },
  {
    title: "Revenue",
    count: "$75,000",
    icon: <FaMoneyBill />,
    bg: "bg-yellow-500",
  },
];

function App() {
  const setActiveContent = (content) => {
    console.log("Active content:", content);
  };

  return (
    <Dashboard stats={stats} setActiveContent={setActiveContent} />
  );
}

export default App;
```

---

### 10. **DataFetcher Component (`DataFetcher.jsx`)**

#### **Purpose:**
The `DataFetcher` component is a utility component designed to fetch data from a specified API endpoint and update the state using a provided `setter` function. It is commonly used in conjunction with other components (e.g., `Dashboard`) to dynamically fetch and display data.

#### **Props:**
- **`url`**: (String) The API endpoint from which data will be fetched.
- **`setter`**: (Function) A state-updating function that will be called with the fetched data. This function is responsible for updating the state in the parent component.
- **`requiresData`**: (Boolean, Optional) Determines how the fetched data is structured before being passed to the `setter`. Defaults to `false`.
  - If `true`, the component assumes the response contains a `data` field and extracts it (`result.data`).
  - If `false`, the entire response is passed to the `setter`.

#### **Usage:**
```jsx
import React, { useState } from "react";
import { DataFetcher } from 'react-dashboard-kit';

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div>
      <DataFetcher
        url="/api/users"
        setter={setUserData}
        requiresData={true}
      />
      <ul>
        {userData.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

### 11. **RemovableFieldGroup Component (`RemovableFieldGroup.jsx`)**

#### **Purpose:**
The `RemovableFieldGroup` component is a reusable React component that renders a removable section containing a title input and description textarea. It is useful for managing lists of items where each item has a title and description, such as features, FAQs, testimonials, or any similar content structure.

#### **Props:**
- **`data`**: (Object) Object containing `title` and `description` fields.
- **`onChange`**: (Function) Callback function that receives the field name and handles input changes.
- **`onRemove`**: (Function) Callback function to handle removal of the field group.
- **`index`**: (Number) Index of the field group in its parent list.
- **`titlePlaceholder`**: (String, Optional) Custom placeholder text for the title input (default: "Enter title").
- **`descriptionPlaceholder`**: (String, Optional) Custom placeholder text for the description textarea (default: "Enter description").

#### **Usage:**
```jsx
import { RemovableFieldGroup } from 'react-dashboard-kit';

const MyComponent = () => {
  const [items, setItems] = useState([
    { title: '', description: '' }
  ]);

  const handleChange = (index) => (field) => (e) => {
    const newItems = [...items];
    newItems[index][field] = e.target.value;
    setItems(newItems);
  };

  const handleRemove = (index) => () => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <RemovableFieldGroup
          key={index}
          data={item}
          onChange={handleChange(index)}
          onRemove={handleRemove(index)}
          index={index}
          titlePlaceholder="Enter feature title"
          descriptionPlaceholder="Describe your feature"
        />
      ))}
    </div>
  );
};
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](#) file for details.

---

