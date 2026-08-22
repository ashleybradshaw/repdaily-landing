"use client";

import { forwardRef, useRef } from "react";
import type { IconHandle } from "@animateicons/react";
import {
  AudioLinesIcon as LucideAudioLinesIcon,
  BookmarkCheckIcon as LucideBookmarkCheckIcon,
  BoxesIcon as LucideBoxesIcon,
  CalendarHeartIcon as LucideCalendarHeartIcon,
  CameraIcon as LucideCameraIcon,
  ChartNoAxesCombinedIcon as LucideChartNoAxesCombinedIcon,
  ClockArrowUpIcon as LucideClockArrowUpIcon,
  ScanLineIcon as LucideScanLineIcon,
  SlidersHorizontalIcon as LucideSlidersHorizontalIcon,
  SmartphoneIcon as LucideSmartphoneIcon,
  SparklesIcon as LucideSparklesIcon,
  WaypointsIcon as LucideWaypointsIcon,
  ZapIcon as LucideZapIcon,
} from "@animateicons/react/lucide";

export type { IconHandle };

const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = "#C9E800";

type LucideAnimatedIcon = typeof LucideCameraIcon;
type IconProps = React.ComponentProps<LucideAnimatedIcon>;

function withDefaults(Icon: LucideAnimatedIcon, displayName: string) {
  const Wrapped = forwardRef<IconHandle, IconProps>(
    function AnimatedIcon(
      { size = DEFAULT_SIZE, color = DEFAULT_COLOR, ...props },
      ref
    ) {
      return <Icon ref={ref} size={size} color={color} {...props} />;
    }
  );
  Wrapped.displayName = displayName;
  return Wrapped;
}

export const CameraIcon = withDefaults(LucideCameraIcon, "CameraIcon");
export const CalendarHeartIcon = withDefaults(
  LucideCalendarHeartIcon,
  "CalendarHeartIcon"
);
export const ScanLineIcon = withDefaults(LucideScanLineIcon, "ScanLineIcon");
export const SmartphoneIcon = withDefaults(
  LucideSmartphoneIcon,
  "SmartphoneIcon"
);
export const SlidersHorizontalIcon = withDefaults(
  LucideSlidersHorizontalIcon,
  "SlidersHorizontalIcon"
);
export const AudioLinesIcon = withDefaults(
  LucideAudioLinesIcon,
  "AudioLinesIcon"
);
export const ChartNoAxesCombinedIcon = withDefaults(
  LucideChartNoAxesCombinedIcon,
  "ChartNoAxesCombinedIcon"
);
export const BookmarkCheckIcon = withDefaults(
  LucideBookmarkCheckIcon,
  "BookmarkCheckIcon"
);
export const ZapIcon = withDefaults(LucideZapIcon, "ZapIcon");
export const WaypointsIcon = withDefaults(LucideWaypointsIcon, "WaypointsIcon");
export const ClockArrowUpIcon = withDefaults(
  LucideClockArrowUpIcon,
  "ClockArrowUpIcon"
);
export const BoxesIcon = withDefaults(LucideBoxesIcon, "BoxesIcon");
export const SparklesIcon = withDefaults(LucideSparklesIcon, "SparklesIcon");

export type AnimatedIcon = ReturnType<typeof withDefaults>;

export function useAnimatedIcon() {
  const ref = useRef<IconHandle>(null);

  return {
    ref,
    onMouseEnter: () => {
      ref.current?.startAnimation();
    },
    onMouseLeave: () => {
      ref.current?.stopAnimation();
    },
  };
}
