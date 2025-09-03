# @joohee/sds

Figma Simple Design System with Code Connect integration

## 🚀 Features

- **React Components**: 30+ reusable UI components
- **TypeScript Support**: Full type safety with TypeScript
- **Figma Integration**: Code Connect for seamless design-to-code workflow
- **Responsive Design**: Mobile-first responsive components
- **Accessibility**: ARIA labels and keyboard navigation support
- **Customizable**: Easy to customize with CSS variables

## 📦 Installation

```bash
npm install @joohee/sds
```

## 🎯 Quick Start

```tsx
import { Button, Input, Card } from '@joohee/sds';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🧩 Available Components

### Primitives
- **Button** - Primary, Neutral, Subtle variants
- **Input** - Text, Email, Password types
- **Checkbox** - Form control with labels
- **Radio** - Radio button groups
- **Select** - Dropdown selection
- **Switch** - Toggle component
- **Textarea** - Multi-line text input
- **Avatar** - User profile images
- **Dialog** - Modal dialogs
- **IconButton** - Icon-only buttons
- **Tag** - Label and toggle tags
- **Tab** - Tab navigation
- **Menu** - Dropdown menus
- **Navigation** - Navigation components
- **Pagination** - Page navigation
- **Slider** - Range input
- **Search** - Search input
- **Notification** - Alert messages
- **Tooltip** - Hover tooltips
- **Accordion** - Collapsible sections

### Text Components
- **Text** - Body text with variants
- **Heading** - Page and section headings
- **Link** - Navigation links
- **Code** - Inline and block code
- **Price** - Price display
- **List** - Ordered and unordered lists
- **ListItem** - List items

### Compositions
- **Card** - Content containers
- **Hero** - Hero sections
- **Header** - Page headers
- **Footer** - Page footers
- **Form** - Form layouts
- **Panel** - Content panels
- **Section** - Page sections

## 🎨 Usage Examples

### Button Component
```tsx
import { Button } from '@joohee/sds';

<Button variant="primary" size="medium" state="default">
  Click me
</Button>

<Button variant="neutral" size="small" disabled>
  Disabled Button
</Button>
```

### Input Component
```tsx
import { Input } from '@joohee/sds';

<Input 
  type="email" 
  placeholder="Enter email"
  hasLabel={true}
  label="Email Address"
/>
```

### Card Component
```tsx
import { Card, Button, Text } from '@joohee/sds';

<Card>
  <Text variant="heading">Card Title</Text>
  <Text variant="body">Card content goes here</Text>
  <Button variant="primary">Action</Button>
</Card>
```

## 🔧 Code Connect

This package includes Figma Code Connect integration for seamless design-to-code workflow:

- **Connected Components**: All components are linked to Figma design system
- **Automatic Props**: Figma properties automatically map to component props
- **Type Safety**: TypeScript interfaces generated from Figma components
- **Real-time Sync**: Design changes automatically reflect in code

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 🎨 Customization

### CSS Variables
```css
:root {
  --sds-color-primary: #2c2c2c;
  --sds-color-neutral: #f5f5f5;
  --sds-spacing-unit: 8px;
  --sds-border-radius: 8px;
}
```

### Component Props
```tsx
<Button 
  variant="custom" 
  className="my-custom-button"
  style={{ backgroundColor: '#custom-color' }}
>
  Custom Button
</Button>
```

## 📚 Documentation

- [Component API Reference](./docs/components.md)
- [Figma Code Connect Guide](./FIGMA_CODE_CONNECT_GUIDE.md)
- [Design Tokens](./docs/tokens.md)
- [Migration Guide](./docs/migration.md)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run app:dev

# Build library
npm run build:lib

# Run Storybook
npm run storybook

# Build Storybook
npm run storybook:build
```

## 📦 Build

```bash
# Build for npm package
npm run build:lib

# Build for production
npm run build
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Joohee-seok-ohs/sds-test/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Joohee-seok-ohs/sds-test/discussions)
- **Email**: [your-email@example.com]

## 🔗 Links

- [GitHub Repository](https://github.com/Joohee-seok-ohs/sds-test)
- [Figma Design System](https://www.figma.com/community/file/1380235722331273046/simple-design-system)
- [Storybook](https://joohee-seok-ohs.github.io/sds-test)

---

Built with ❤️ by Joohee Seok
