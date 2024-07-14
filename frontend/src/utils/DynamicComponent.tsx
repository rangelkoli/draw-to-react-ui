import React, { useState, useEffect, ReactElement, ElementType } from "react";

const useDynamicComponent: React.FC<string> = (componentCode: string) => {
  const [Component, setComponent] = useState<ElementType | null>(null);

  useEffect(() => {
    if (componentCode) {
      try {
        const ComponentModule = new Function(`return ${componentCode}`)();
        setComponent(() => ComponentModule.default);
      } catch (error) {
        console.error("Error loading component:", error);
      }
    }
  }, [componentCode]);

  return Component ? <Component /> : <div>Error: Component not found</div>;
};

export default useDynamicComponent;
