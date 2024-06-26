// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u8zXgekoEWGueXzasWtKpa
// Component: c40669NY8-nE

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

import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: u8zXgekoEWGueXzasWtKpa/projectcss
import sty from "./PlasmicInjuresEvent3.module.css"; // plasmic-import: c40669NY8-nE/css

createPlasmicElementProxy;

export type PlasmicInjuresEvent3__VariantMembers = {};
export type PlasmicInjuresEvent3__VariantsArgs = {};
type VariantPropType = keyof PlasmicInjuresEvent3__VariantsArgs;
export const PlasmicInjuresEvent3__VariantProps = new Array<VariantPropType>();

export type PlasmicInjuresEvent3__ArgsType = {};
type ArgPropType = keyof PlasmicInjuresEvent3__ArgsType;
export const PlasmicInjuresEvent3__ArgProps = new Array<ArgPropType>();

export type PlasmicInjuresEvent3__OverridesType = {
  root?: Flex__<"div">;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultInjuresEvent3Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInjuresEvent3__RenderFunc(props: {
  variants: PlasmicInjuresEvent3__VariantsArgs;
  args: PlasmicInjuresEvent3__ArgsType;
  overrides: PlasmicInjuresEvent3__OverridesType;
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
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
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
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__kYg6P
        )}
      >
        {"FIXTURES"}
      </div>
      {(() => {
        const child$Props = {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 0,
          beforeChange: generateStateOnChangePropForCodeComponents(
            $state,
            "currentSlide",
            ["sliderCarousel", "currentSlide"],
            SliderWrapper_Helpers
          ),
          centerMode: true,
          className: classNames("__wab_instance", sty.sliderCarousel),
          cssEase: "linear",
          initialSlide: generateStateValueProp($state, [
            "sliderCarousel",
            "currentSlide"
          ]),
          ref: ref => {
            $refs["sliderCarousel"] = ref;
          },
          sliderScopeClassName: sty["sliderCarousel__slider"],
          speed: 5000
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "currentSlide",
              plasmicStateName: "sliderCarousel.currentSlide"
            }
          ],

          [],
          SliderWrapper_Helpers ?? {},
          child$Props
        );

        return (
          <SliderWrapper
            data-plasmic-name={"sliderCarousel"}
            data-plasmic-override={overrides.sliderCarousel}
            {...child$Props}
          >
            <div className={classNames(projectcss.all, sty.freeBox__uQc4B)}>
              <div className={classNames(projectcss.all, sty.columns__u3KMx)}>
                <div className={classNames(projectcss.all, sty.column__yJjz)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nwExV
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__cBvf4)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ieCN
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__h3IQq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hshsf
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__x0Rr5)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oWd3W
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___4JR3V)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fWzv
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__wChDa)}>
              <div className={classNames(projectcss.all, sty.columns__oslCh)}>
                <div className={classNames(projectcss.all, sty.column__dzuuM)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fxSuf
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__cZzhs)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aMrt
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__yblpG)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mt0OL
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___7IAuS)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dCk5F
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___2ARjH)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__boz1
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___0X2Yv)}>
              <div className={classNames(projectcss.all, sty.columns__xae6K)}>
                <div className={classNames(projectcss.all, sty.column__hdZvx)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jDgsl
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__j36Yb)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vrZu1
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__a59B)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d1EDj
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__zJth0)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bKlhp
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__ixqTx)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yDDu
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__uIodj)}>
              <div className={classNames(projectcss.all, sty.columns__ej9Nb)}>
                <div className={classNames(projectcss.all, sty.column__tvOh)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qoxxj
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__a2T0I)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7Wz9D
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__x0NQx)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vw67L
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__v6XPk)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qzLCr
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__oqMZq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eNvOo
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
          </SliderWrapper>
        );
      })()}
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/proliga_clone/images/logoSponsorMainPinkpng.png",
          fullWidth: 100,
          fullHeight: 40,
          aspectRatio: undefined
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sliderCarousel", "img"],
  sliderCarousel: ["sliderCarousel"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sliderCarousel: typeof SliderWrapper;
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInjuresEvent3__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInjuresEvent3__VariantsArgs;
    args?: PlasmicInjuresEvent3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInjuresEvent3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInjuresEvent3__ArgsType,
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
          internalArgPropNames: PlasmicInjuresEvent3__ArgProps,
          internalVariantPropNames: PlasmicInjuresEvent3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInjuresEvent3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInjuresEvent3";
  } else {
    func.displayName = `PlasmicInjuresEvent3.${nodeName}`;
  }
  return func;
}

export const PlasmicInjuresEvent3 = Object.assign(
  // Top-level PlasmicInjuresEvent3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicInjuresEvent3
    internalVariantProps: PlasmicInjuresEvent3__VariantProps,
    internalArgProps: PlasmicInjuresEvent3__ArgProps
  }
);

export default PlasmicInjuresEvent3;
/* prettier-ignore-end */
