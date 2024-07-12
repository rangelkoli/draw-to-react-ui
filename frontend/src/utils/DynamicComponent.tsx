import React, { useState, useEffect } from "react";

const useDynamicComponent = (componentCode: string) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (componentCode) {
      // Create a module from the component code
      const ComponentModule = new Function(`return ${componentCode}`)();
      setComponent(() => ComponentModule.default);
    }
  }, [componentCode]);

  return Component;
};

export default useDynamicComponent;
