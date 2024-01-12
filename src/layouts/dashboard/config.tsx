import SvgIcon from "@mui/material/SvgIcon";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import BarChartSquare02Icon from "src/icons/untitled-ui/duocolor/bar-chart-square-02";
import CalendarIcon from "src/icons/untitled-ui/duocolor/calendar";
import HomeSmileIcon from "src/icons/untitled-ui/duocolor/home-smile";
import Mail03Icon from "src/icons/untitled-ui/duocolor/mail-03";
import MessageChatSquareIcon from "src/icons/untitled-ui/duocolor/message-chat-square";
import Share07Icon from "src/icons/untitled-ui/duocolor/share-07";
import { tokens } from "src/locales/tokens";
import { paths } from "src/paths";

export interface Item {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      {
        items: [
          {
            title: t(tokens.nav.dashboard),
            path: paths.dashboard.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          {
            title: t(tokens.nav.courses),
            path: paths.dashboard.academy.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          {
            title: t(tokens.nav.analytics),
            path: paths.dashboard.analytics,
            icon: (
              <SvgIcon fontSize="small">
                <BarChartSquare02Icon />
              </SvgIcon>
            ),
          },
        ],
      },
      {
        subheader: t(tokens.nav.concepts),
        items: [
          {
            title: t(tokens.nav.socialMedia),
            path: paths.dashboard.social.index,
            icon: (
              <SvgIcon fontSize="small">
                <Share07Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.profile),
                path: paths.dashboard.social.profile,
              },
              {
                title: t(tokens.nav.feed),
                path: paths.dashboard.social.feed,
              },
            ],
          },

          {
            title: t(tokens.nav.mail),
            path: paths.dashboard.mail,
            icon: (
              <SvgIcon fontSize="small">
                <Mail03Icon />
              </SvgIcon>
            ),
          },
          {
            title: t(tokens.nav.chat),
            path: paths.dashboard.chat,
            icon: (
              <SvgIcon fontSize="small">
                <MessageChatSquareIcon />
              </SvgIcon>
            ),
          },
          {
            title: t(tokens.nav.calendar),
            path: paths.dashboard.calendar,
            icon: (
              <SvgIcon fontSize="small">
                <CalendarIcon />
              </SvgIcon>
            ),
          },
        ],
      },
    ];
  }, [t]);
};
