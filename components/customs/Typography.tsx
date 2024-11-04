import clsx from "clsx";

export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  color?: "foregound" | "default";
  component?: React.ElementType;
  variant?: "h1" | "h2" | "title" | "subTitle" | "list";
}

export const Typography = ({
  children,
  className,
  color = "default",
  component,
  variant,
  ...props
}: TypographyProps) => {
  // A versatile component for rendering different text styles
  // Supports various variants like h1, h2, title, subTitle, list, and default paragraph
  // Allows customization of color, component type, and additional classes

  // Render logic for each variant (h1, h2, title, subTitle, list)
  // ...

  // Default rendering for paragraph text
  const H1Component = component || "h1";
  if (variant === "h1") {
    return (
      <H1Component
        {...props}
        className={clsx(
          className,
          "text-3xl font-bold flex",
          color === "foregound" ? "text-text-foreground" : "text-text-default"
        )}
      >
        {children}
      </H1Component>
    );
  }
  const H2Component = component || "h2";
  if (variant === "h2") {
    return (
      <H2Component
        {...props}
        className={clsx(
          className,
          "text-2xl font-bold flex",
          color === "foregound" ? "text-text-foreground" : "text-text-default"
        )}
      >
        {children}
      </H2Component>
    );
  }
  const TitleComponent = component || "h3";
  if (variant === "title") {
    return (
      <TitleComponent
        {...props}
        className={clsx(
          className,
          "text-5xl font-bold m-auto py-5 flex",
          color === "foregound" ? "text-text-foreground" : "text-text-default"
        )}
      >
        {children}
      </TitleComponent>
    );
  }
  const SubTitleComponent = component || "h4";
  if (variant === "subTitle") {
    return (
      <SubTitleComponent
        {...props}
        className={clsx(
          className,
          "text-xl font-semibold italic flex",
          color === "foregound" ? "text-text-foreground" : "text-text-default"
        )}
      >
        {children}
      </SubTitleComponent>
    );
  }
  if (variant === "list") {
    return (
      <ul
        {...props}
        className={clsx(
          className,
          " list-disc list-inside text-lg text-left justify-start",
          color === "foregound" ? "text-text-foreground" : "text-text-default"
        )}
      >
        {children}
      </ul>
    );
  }
  const ComonText = component || "p";
  return (
    <ComonText
      {...props}
      className={clsx(
        className,
        "md:text-lg font-normal gap-2 flex",
        color === "foregound" ? "text-text-foreground" : "text-text-default"
      )}
    >
      {children}
    </ComonText>
  );
};
