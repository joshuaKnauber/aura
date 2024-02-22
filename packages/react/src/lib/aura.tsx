import React from "react";
import { test } from "@aura/shared";

type AuraProps = {};

const withAura = <T extends React.ElementType>(Component: T) => {
  return (props: React.ComponentProps<T> & AuraProps) => {
    const newProps = {
      ...props,
      placeholder: test(),
    };
    return React.createElement(Component, newProps as any);
  };
};

export const aura = new Proxy(
  {},
  {
    get: (_, element) => {
      if (typeof element === "string") {
        return withAura(element as keyof JSX.IntrinsicElements);
      }
      return null;
    },
  }
) as { [K in keyof JSX.IntrinsicElements]: ReturnType<typeof withAura<K>> };

// needs to work with html and react components
// define what the aura component is doing -> filling props, choosing behavior, etc
