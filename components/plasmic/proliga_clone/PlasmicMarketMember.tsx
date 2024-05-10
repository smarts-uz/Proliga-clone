// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u8zXgekoEWGueXzasWtKpa
// Component: yElgMzeSjxqv

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: u8zXgekoEWGueXzasWtKpa/projectcss
import sty from "./PlasmicMarketMember.module.css"; // plasmic-import: yElgMzeSjxqv/css

createPlasmicElementProxy;

export type PlasmicMarketMember__VariantMembers = {
  borjaMayoral: "borjaMayoral";
  pedri: "pedri";
  mendez: "mendez";
};
export type PlasmicMarketMember__VariantsArgs = {
  borjaMayoral?: SingleBooleanChoiceArg<"borjaMayoral">;
  pedri?: SingleBooleanChoiceArg<"pedri">;
  mendez?: SingleBooleanChoiceArg<"mendez">;
};
type VariantPropType = keyof PlasmicMarketMember__VariantsArgs;
export const PlasmicMarketMember__VariantProps = new Array<VariantPropType>(
  "borjaMayoral",
  "pedri",
  "mendez"
);

export type PlasmicMarketMember__ArgsType = {};
type ArgPropType = keyof PlasmicMarketMember__ArgsType;
export const PlasmicMarketMember__ArgProps = new Array<ArgPropType>();

export type PlasmicMarketMember__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultMarketMemberProps {
  borjaMayoral?: SingleBooleanChoiceArg<"borjaMayoral">;
  pedri?: SingleBooleanChoiceArg<"pedri">;
  mendez?: SingleBooleanChoiceArg<"mendez">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMarketMember__RenderFunc(props: {
  variants: PlasmicMarketMember__VariantsArgs;
  args: PlasmicMarketMember__ArgsType;
  overrides: PlasmicMarketMember__OverridesType;
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
        path: "borjaMayoral",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borjaMayoral
      },
      {
        path: "pedri",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.pedri
      },
      {
        path: "mendez",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.mendez
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
        sty.root,
        {
          [sty.rootborjaMayoral]: hasVariant(
            $state,
            "borjaMayoral",
            "borjaMayoral"
          ),
          [sty.rootmendez]: hasVariant($state, "mendez", "mendez"),
          [sty.rootpedri]: hasVariant($state, "pedri", "pedri")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__rrbOg)}>
        <div className={classNames(projectcss.all, sty.freeBox__iqYdm)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__glOpU, {
              [sty.imgborjaMayoral__glOpUrNInV]: hasVariant(
                $state,
                "borjaMayoral",
                "borjaMayoral"
              ),
              [sty.imgmendez__glOpUk61Hj]: hasVariant(
                $state,
                "mendez",
                "mendez"
              ),
              [sty.imgpedri__glOpU0HwO]: hasVariant($state, "pedri", "pedri")
            })}
            displayHeight={"112px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"104px"}
            loading={"lazy"}
            src={
              hasVariant($state, "mendez", "mendez")
                ? {
                    src: "/plasmic/proliga_clone/images/willianJosepng.png",
                    fullWidth: 256,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }
                : hasVariant($state, "pedri", "pedri")
                ? {
                    src: "/plasmic/proliga_clone/images/ikerMunofizpng.png",
                    fullWidth: 256,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }
                : hasVariant($state, "borjaMayoral", "borjaMayoral")
                ? {
                    src: "/plasmic/proliga_clone/images/willianJosepng.png",
                    fullWidth: 256,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }
                : {
                    src: "/plasmic/proliga_clone/images/rodrygopng.png",
                    fullWidth: 256,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }
            }
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__obGJ, {
              [sty.imgborjaMayoral__obGJrNInV]: hasVariant(
                $state,
                "borjaMayoral",
                "borjaMayoral"
              ),
              [sty.imgmendez__obGJk61Hj]: hasVariant(
                $state,
                "mendez",
                "mendez"
              ),
              [sty.imgpedri__obGJ0HwO]: hasVariant($state, "pedri", "pedri")
            })}
            displayHeight={"28px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"28px"}
            loading={"lazy"}
            src={
              hasVariant($state, "mendez", "mendez")
                ? {
                    src: "/plasmic/proliga_clone/images/osasunapng.png",
                    fullWidth: 120,
                    fullHeight: 120,
                    aspectRatio: undefined
                  }
                : hasVariant($state, "pedri", "pedri")
                ? {
                    src: "/plasmic/proliga_clone/images/fcBarcelonapng.png",
                    fullWidth: 96,
                    fullHeight: 100,
                    aspectRatio: undefined
                  }
                : hasVariant($state, "borjaMayoral", "borjaMayoral")
                ? {
                    src: "/plasmic/proliga_clone/images/cadizpng.png",
                    fullWidth: 1024,
                    fullHeight: 1024,
                    aspectRatio: undefined
                  }
                : {
                    src: "/plasmic/proliga_clone/images/realMadridpng.png",
                    fullWidth: 80,
                    fullHeight: 104,
                    aspectRatio: undefined
                  }
            }
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__rIpAh)}>
          <div className={classNames(projectcss.all, sty.freeBox__b3M02)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bnU,
                {
                  [sty.linkmendez__bnUk61Hj]: hasVariant(
                    $state,
                    "mendez",
                    "mendez"
                  )
                }
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"DEF"}
            </PlasmicLink__>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jfK5B,
                {
                  [sty.textborjaMayoral__jfK5BrNInV]: hasVariant(
                    $state,
                    "borjaMayoral",
                    "borjaMayoral"
                  ),
                  [sty.textmendez__jfK5Bk61Hj]: hasVariant(
                    $state,
                    "mendez",
                    "mendez"
                  ),
                  [sty.textpedri__jfK5B0HwO]: hasVariant(
                    $state,
                    "pedri",
                    "pedri"
                  )
                }
              )}
            >
              {hasVariant($state, "mendez", "mendez")
                ? "Mendez"
                : hasVariant($state, "pedri", "pedri")
                ? "Pedri"
                : hasVariant($state, "borjaMayoral", "borjaMayoral")
                ? "Borja "
                : "Militao"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wSzU)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nw8Sw
              )}
            >
              {"previous value\n4.306.249"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__fLmoo)}>
          <div className={classNames(projectcss.all, sty.freeBox__tfvO)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___9W1Zi,
                {
                  [sty.linkborjaMayoral___9W1ZIrNInV]: hasVariant(
                    $state,
                    "borjaMayoral",
                    "borjaMayoral"
                  ),
                  [sty.linkmendez___9W1ZIk61Hj]: hasVariant(
                    $state,
                    "mendez",
                    "mendez"
                  ),
                  [sty.linkpedri___9W1Zi0HwO]: hasVariant(
                    $state,
                    "pedri",
                    "pedri"
                  )
                }
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {hasVariant($state, "pedri", "pedri")
                ? "35%"
                : hasVariant($state, "borjaMayoral", "borjaMayoral")
                ? "16%"
                : "39%"}
            </PlasmicLink__>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kqpfY
            )}
          >
            {"Current value"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5FpB
            )}
          >
            {"6.007.170"}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMarketMember__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMarketMember__VariantsArgs;
    args?: PlasmicMarketMember__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMarketMember__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMarketMember__ArgsType,
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
          internalArgPropNames: PlasmicMarketMember__ArgProps,
          internalVariantPropNames: PlasmicMarketMember__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMarketMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMarketMember";
  } else {
    func.displayName = `PlasmicMarketMember.${nodeName}`;
  }
  return func;
}

export const PlasmicMarketMember = Object.assign(
  // Top-level PlasmicMarketMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMarketMember
    internalVariantProps: PlasmicMarketMember__VariantProps,
    internalArgProps: PlasmicMarketMember__ArgProps
  }
);

export default PlasmicMarketMember;
/* prettier-ignore-end */