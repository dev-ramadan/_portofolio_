declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns";
    lineColor?: string;
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string | React.ReactNode;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    position?: "left" | "right";
    style?: React.CSSProperties;
    visible?: boolean;
    children?: React.ReactNode; 
  }

  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

declare module "react-vertical-timeline-component/dist-es6";

declare module "*.css";

