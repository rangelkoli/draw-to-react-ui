import { useState, useEffect } from "react";

type DynamicComponentProps = Record<string, any>;

const useDynamicComponent = (componentCode: string | null) => {
  const [Component, setComponent] =
    useState<React.FC<DynamicComponentProps> | null>(null);

  useEffect(() => {
    if (componentCode) {
      try {
        // Create a module from the component code
        const ComponentModule = new Function(`return ${componentCode}`)();
        setComponent(() => ComponentModule.default);
      } catch (error) {
        console.error("Error loading component:", error);
      }
    }
  }, [componentCode]);

  return Component;
};

export default useDynamicComponent;
