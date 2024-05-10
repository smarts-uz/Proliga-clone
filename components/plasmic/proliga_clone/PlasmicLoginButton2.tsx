// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u8zXgekoEWGueXzasWtKpa
// Component: C11Ke6ic8a8G

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: zAmS4vc8WNH5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: u8zXgekoEWGueXzasWtKpa/projectcss
import sty from "./PlasmicLoginButton2.module.css"; // plasmic-import: C11Ke6ic8a8G/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CZKEhs5V2BhV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: dpkzv3Bhr9gn/icon

createPlasmicElementProxy;

export type PlasmicLoginButton2__VariantMembers = {
  loginButton2: "loginButton";
};
export type PlasmicLoginButton2__VariantsArgs = {
  loginButton2?: SingleChoiceArg<"loginButton">;
};
type VariantPropType = keyof PlasmicLoginButton2__VariantsArgs;
export const PlasmicLoginButton2__VariantProps = new Array<VariantPropType>(
  "loginButton2"
);

export type PlasmicLoginButton2__ArgsType = {};
type ArgPropType = keyof PlasmicLoginButton2__ArgsType;
export const PlasmicLoginButton2__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginButton2__OverridesType = {
  loginButton?: Flex__<typeof Button>;
  text?: Flex__<"div">;
};

export interface DefaultLoginButton2Props {
  loginButton2?: SingleChoiceArg<"loginButton">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoginButton2__RenderFunc(props: {
  variants: PlasmicLoginButton2__VariantsArgs;
  args: PlasmicLoginButton2__ArgsType;
  overrides: PlasmicLoginButton2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "loginButton2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.loginButton2
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Button
      data-plasmic-name={"loginButton"}
      data-plasmic-override={overrides.loginButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.loginButton, {
        [sty.loginButtonloginButton2_loginButton]: hasVariant(
          $state,
          "loginButton2",
          "loginButton"
        )
      })}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textloginButton2_loginButton]: hasVariant(
            $state,
            "loginButton2",
            "loginButton"
          )
        })}
      >
        {"Login"}
      </div>
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  loginButton: ["loginButton", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  loginButton: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginButton2__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginButton2__VariantsArgs;
    args?: PlasmicLoginButton2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginButton2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginButton2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoginButton2__ArgProps,
          internalVariantPropNames: PlasmicLoginButton2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginButton2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "loginButton") {
    func.displayName = "PlasmicLoginButton2";
  } else {
    func.displayName = `PlasmicLoginButton2.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginButton2 = Object.assign(
  // Top-level PlasmicLoginButton2 renders the root element
  makeNodeComponent("loginButton"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicLoginButton2
    internalVariantProps: PlasmicLoginButton2__VariantProps,
    internalArgProps: PlasmicLoginButton2__ArgProps
  }
);

export default PlasmicLoginButton2;
/* prettier-ignore-end */
