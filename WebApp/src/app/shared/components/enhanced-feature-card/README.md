# Enhanced Feature Card Component

A comprehensive, reusable Angular component for displaying complex feature information with various layouts, styles, and interactive capabilities.

## Features

- **Multiple Variants**: Default, highlighted, bordered, and minimal styles
- **Flexible Sizing**: Small, medium, and large size options
- **Icon Positioning**: Top, left, or background icon placement
- **Interactive Elements**: Support for clicks, navigation, and custom actions
- **Rich Content**: Title, description, badge, footer, and image support
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive Design**: Mobile-first responsive layouts
- **Animation Support**: Smooth hover effects and transitions

## Usage

### Basic Usage

```typescript
import {
  EnhancedFeatureCardComponent,
  EnhancedFeature,
} from '@/shared/components/enhanced-feature-card/enhanced-feature-card.component';

@Component({
  // ... component configuration
  imports: [EnhancedFeatureCardComponent],
})
export class MyComponent {
  feature: EnhancedFeature = {
    title: 'Advanced Analytics',
    description:
      'Get detailed insights into your application performance with our comprehensive analytics dashboard.',
    icon: 'heroChartBarSquare',
    badge: 'Premium',
    footer: 'Updated daily',
  };
}
```

```html
<app-enhanced-feature-card
  [feature]="feature"
  variant="highlighted"
  size="md"
  iconPosition="top"
  colorTheme="blue"
>
</app-enhanced-feature-card>
```

### Component Props

| Prop           | Type                                                    | Default     | Description                       |
| -------------- | ------------------------------------------------------- | ----------- | --------------------------------- |
| `feature`      | `EnhancedFeature`                                       | Required    | The feature data object           |
| `variant`      | `'default' \| 'highlighted' \| 'bordered' \| 'minimal'` | `'default'` | Visual style variant              |
| `size`         | `'sm' \| 'md' \| 'lg'`                                  | `'md'`      | Card size                         |
| `iconPosition` | `'top' \| 'left' \| 'background'`                       | `'top'`     | Icon placement                    |
| `colorTheme`   | `string`                                                | `'blue'`    | Color theme (Tailwind color name) |
| `hover`        | `boolean`                                               | `true`      | Enable hover effects              |
| `clickable`    | `boolean`                                               | `true`      | Enable click interactions         |

### EnhancedFeature Interface

```typescript
interface EnhancedFeature {
  title: string; // Required: Feature title
  description: string; // Required: Feature description
  icon?: string; // Optional: Heroicon name
  image?: string; // Optional: Image URL
  badge?: string; // Optional: Badge text
  footer?: string; // Optional: Footer text
  href?: string; // Optional: External link
  routerLink?: string; // Optional: Angular router link
  action?: () => void; // Optional: Custom click action
}
```

## Examples

### Basic Feature Card

```html
<app-enhanced-feature-card
  [feature]="{
    title: 'Real-time Monitoring',
    description: 'Monitor your applications in real-time with instant alerts and notifications.',
    icon: 'heroDevicePhoneMobile'
  }"
>
</app-enhanced-feature-card>
```

### Highlighted Card with Badge

```html
<app-enhanced-feature-card
  [feature]="{
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to get predictive analytics and smart recommendations.',
    icon: 'heroBeaker',
    badge: 'Beta'
  }"
  variant="highlighted"
  colorTheme="purple"
>
</app-enhanced-feature-card>
```

### Large Card with Image and Navigation

```html
<app-enhanced-feature-card
  [feature]="{
    title: 'Project Management',
    description: 'Comprehensive project management tools for teams of any size.',
    image: '/assets/images/project-management.jpg',
    routerLink: '/projects',
    footer: '15+ integrations available'
  }"
  size="lg"
  variant="bordered"
>
</app-enhanced-feature-card>
```

### Left Icon Layout

```html
<app-enhanced-feature-card
  [feature]="{
    title: 'Security First',
    description: 'Enterprise-grade security with end-to-end encryption.',
    icon: 'heroShieldCheck'
  }"
  iconPosition="left"
  size="sm"
  variant="minimal"
>
</app-enhanced-feature-card>
```

### Custom Action Handler

```typescript
export class MyComponent {
  handleCustomAction(): void {
    console.log('Custom action triggered!');
    // Your custom logic here
  }

  feature: EnhancedFeature = {
    title: 'Custom Feature',
    description: 'This card triggers a custom action when clicked.',
    icon: 'heroRocketLaunch',
    action: () => this.handleCustomAction(),
  };
}
```

## Styling Variants

### Default

Clean white background with subtle shadow and smooth hover effects.

### Highlighted

Gradient background with enhanced colors and glow effects. Perfect for premium features.

### Bordered

Prominent border styling with scale hover effect. Great for feature comparisons.

### Minimal

Simple, clean design with minimal visual elements. Ideal for dense layouts.

## Accessibility Features

- Full keyboard navigation support
- ARIA labels and semantic HTML
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences respected
- Focus indicators for interactive elements

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notes

- Uses Heroicons for consistent icon styling
- Fully responsive and mobile-friendly
- Supports both light and dark themes
- Optimized for performance with OnPush change detection
- Print-friendly styles included
