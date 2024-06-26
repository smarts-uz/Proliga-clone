// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u8zXgekoEWGueXzasWtKpa
// Component: mYi1CdVmV3yc

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

import Navbar from "../../Navbar"; // plasmic-import: sfa6Z5VQudRC/component
import Clubs from "../../Clubs"; // plasmic-import: XYlT5RCMFzG3/component
import MarketMember from "../../MarketMember"; // plasmic-import: yElgMzeSjxqv/component
import Footer from "../../Footer"; // plasmic-import: YsWD3NWXZqSQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: u8zXgekoEWGueXzasWtKpa/projectcss
import sty from "./PlasmicMarket.module.css"; // plasmic-import: mYi1CdVmV3yc/css

createPlasmicElementProxy;

export type PlasmicMarket__VariantMembers = {};
export type PlasmicMarket__VariantsArgs = {};
type VariantPropType = keyof PlasmicMarket__VariantsArgs;
export const PlasmicMarket__VariantProps = new Array<VariantPropType>();

export type PlasmicMarket__ArgsType = {};
type ArgPropType = keyof PlasmicMarket__ArgsType;
export const PlasmicMarket__ArgProps = new Array<ArgPropType>();

export type PlasmicMarket__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  freeBox?: Flex__<"div">;
  clubs?: Flex__<typeof Clubs>;
  columns?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultMarketProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMarket__RenderFunc(props: {
  variants: PlasmicMarket__VariantsArgs;
  args: PlasmicMarket__ArgsType;
  overrides: PlasmicMarket__OverridesType;
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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Clubs
              data-plasmic-name={"clubs"}
              data-plasmic-override={overrides.clubs}
              className={classNames("__wab_instance", sty.clubs)}
            />
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5KpIz
            )}
          >
            {"Markets"}
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__ilMin)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dqMX
                )}
              >
                {"Highest transfer Rises"}
              </div>
              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__lc5Wj
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__lqudE
                )}
                mendez={true}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__lr3Um
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__xq1Ex
                )}
                mendez={true}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember___5S7SX
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember___717Yk
                )}
                mendez={true}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__ec3C8
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__a9QjI)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6Vp96
                )}
              >
                {"Highest market reduction"}
              </div>
              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember___29Ab
                )}
              />

              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__inksC
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__cgWs2
                )}
              />

              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember___6Y6Q
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__myzSu
                )}
              />

              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__ceSyP
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__fu0Cc
                )}
              />
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "freeBox", "clubs", "columns", "footer"],
  navbar: ["navbar"],
  freeBox: ["freeBox", "clubs"],
  clubs: ["clubs"],
  columns: ["columns"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  freeBox: "div";
  clubs: typeof Clubs;
  columns: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMarket__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMarket__VariantsArgs;
    args?: PlasmicMarket__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMarket__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMarket__ArgsType,
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
          internalArgPropNames: PlasmicMarket__ArgProps,
          internalVariantPropNames: PlasmicMarket__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMarket__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMarket";
  } else {
    func.displayName = `PlasmicMarket.${nodeName}`;
  }
  return func;
}

export const PlasmicMarket = Object.assign(
  // Top-level PlasmicMarket renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    freeBox: makeNodeComponent("freeBox"),
    clubs: makeNodeComponent("clubs"),
    columns: makeNodeComponent("columns"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMarket
    internalVariantProps: PlasmicMarket__VariantProps,
    internalArgProps: PlasmicMarket__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMarket;
/* prettier-ignore-end */
