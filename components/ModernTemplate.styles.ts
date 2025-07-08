import { DesignTokens } from "../types";

export const getCssVariables = (design: DesignTokens): string => {
  const variables = [
    // Brand colors
    `--color-brand: ${design.colors.brand}`,
    `--color-accent: ${design.colors.accent}`,

    // Background colors
    `--color-background: ${design.colors.background}`,
    `--color-bg-light: #f8fafc`,
    `--color-bg-dark: ${design.colors.brand}`,

    // Text colors
    `--color-text: ${design.colors.text}`,
    `--color-text-on-light: ${design.colors.text}`,
    `--color-text-on-dark: #ffffff`,
    `--color-text-light: #6b7280`,

    // Typography
    `--font-heading: ${design.fonts.heading}`,
    `--font-body: ${design.fonts.body}`,

    // Spacing
    `--spacing-sm: ${design.spacing.sm}`,
    `--spacing-md: ${design.spacing.md}`,
    `--spacing-lg: ${design.spacing.lg}`,
    `--spacing-xl: ${design.spacing.xl}`,

    // Border radius
    `--border-radius-sm: ${design.borderRadius.sm}`,
    `--border-radius-md: ${design.borderRadius.md}`,
    `--border-radius-lg: ${design.borderRadius.lg}`,
  ];
  return variables.join("; ");
};

// Function alias for compatibility
export const generateCssVariables = (design: DesignTokens): string => {
  return `:root { ${getCssVariables(design)} }`;
};

// Global static styles function
export const getGlobalStaticStyles = (isPreview: boolean = false): string => {
  return `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-body);
      color: var(--color-text);
      background-color: var(--color-background);
      line-height: 1.6;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
      font-weight: 600;
    }
    
    button {
      font-family: var(--font-body);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--spacing-lg);
    }
    
    ${
      isPreview
        ? `
      .preview-mode {
        border: 2px dashed #ccc;
        position: relative;
      }
      
      .preview-mode::before {
        content: "Preview Mode";
        position: absolute;
        top: 0;
        right: 0;
        background: #f0f0f0;
        padding: 4px 8px;
        font-size: 12px;
        z-index: 1000;
      }
    `
        : ""
    }
  `;
};
