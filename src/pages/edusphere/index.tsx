import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { addDays, subDays, subHours, subMinutes } from "date-fns";
import type { NextPage } from "next";

import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";
import { CourseCard } from "src/sections/dashboard/academy/course-card";
import { OverviewEvents } from "src/sections/dashboard/overview/overview-events";
import { OverviewHelp } from "src/sections/dashboard/overview/overview-help";
import { OverviewInbox } from "src/sections/dashboard/overview/overview-inbox";
import { OverviewOpenTasks } from "src/sections/dashboard/overview/overview-open-tasks";
import { OverviewOpenTickets } from "src/sections/dashboard/overview/overview-open-tickets";
import { OverviewPendingMeetings } from "src/sections/dashboard/overview/overview-pending-meetings";
import { OverviewSubscriptionUsage } from "src/sections/dashboard/overview/overview-subscription-usage";
import { OverviewTips } from "src/sections/dashboard/overview/overview-tips";
import { OverviewTransactions } from "src/sections/dashboard/overview/overview-transactions";
import { OverviewUpdateNotes } from "src/sections/dashboard/overview/overview-update-notes";
import { Course } from "src/types/academy";

const now = new Date();

const useCourses = (): Course[] => {
  return [
    {
      id: "c3a2b7331eef8329e2a87c79",
      description: "Einführung in React und Redux",
      duration: "78 hours",
      media: "/assets/courses/course-1.png",
      progress: 23,
      title: "React and Redux Tutorial",
    },
    {
      id: "3f02f696f869ecd1c68e95a3",
      description: "Lineare Gleichungen",
      duration: "14 hours",
      media: "/assets/courses/course-2.png",
      progress: 52,
      title: "Mathematik II",
    },
    {
      id: "f6e76a6474038384cd9e032b",
      description: "Die perfekte Zubereitung einer Bratwurst",
      duration: "21 hours",
      media: "/assets/courses/course-3.png",
      progress: 90,
      title: "Die perfekte Grillwurst",
    },
  ];
};

const Page: NextPage = () => {
  const settings = useSettings();
  const courses = useCourses();
  usePageView();

  return (
    <>
      <Seo tit-="Dashboard: Overview" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "xl"}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <Typography variant="h4">Dashboard</Typography>
                </div>
                <div>
                  {/* 
                  <Stack direction="row" spacing={4}>
                    <Button
                      startIcon={
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      }
                      variant="contained"
                    >
                      New Dashboard
                    </Button>
                  </Stack>
                  */}
                </div>
              </Stack>
            </Grid>

            <Grid xs={12}>
              <Divider />
            </Grid>
            <Grid xs={12}>
              <Typography variant="h5">Neuigkeiten</Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewOpenTasks amount={31} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewPendingMeetings amount={12} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewOpenTickets amount={5} />
            </Grid>

            <Grid xs={12} md={5}>
              <OverviewEvents
                events={[
                  {
                    id: "3bfa0bc6cbc99bf747c94d51",
                    createdAt: addDays(now, 1),
                    description: "17:00 to 18:00",
                    title: "Abgabe Mathematik",
                  },
                  {
                    id: "dd6c8ce8655ac222b01f24f9",
                    createdAt: addDays(now, 4),
                    description: "17:00 to 18:00",
                    title: "Gruppenarbeit Erdkunde",
                  },
                  {
                    id: "d2a66e24110f52acb0cd0b9f",
                    createdAt: addDays(now, 7),
                    description: "17:00 to 18:00",
                    title: "Gruppenarbeit Erdkunde",
                  },
                ]}
              />
            </Grid>

            <Grid xs={12} md={7}>
              <OverviewInbox
                messages={[
                  {
                    id: "b91cbe81ee3efefba6b915a7",
                    content:
                      "Hey, ich habe eine Frage zur Aufgabe 3. Kannst du mir helfen?",
                    createdAt: subMinutes(now, 2),
                    senderAvatar: "/assets/avatars/avatar-alcides-antonio.png",
                    senderName: "Alicia S.",
                    senderOnline: true,
                  },
                  {
                    id: "de0eb1ac517aae1aa57c0b7e",
                    content: "Hey Vivian, wann passt es dir?",
                    createdAt: subMinutes(now, 56),
                    senderAvatar: "/assets/avatars/avatar-marcus-finn.png",
                    senderName: "Marcus F.",
                    senderOnline: false,
                  },
                  {
                    id: "38e2b0942c90d0ad724e6f40",
                    content:
                      "In der Präsentation gibt es noch einen Fehler - kannst du dich darum kümmern?",
                    createdAt: subHours(subMinutes(now, 23), 3),
                    senderAvatar: "/assets/avatars/avatar-carson-darrin.png",
                    senderName: "Carina R.",
                    senderOnline: true,
                  },
                  {
                    id: "467505f3356f25a69f4c4890",
                    content:
                      "Hey, ich warte noch auf dein Feedack. Magst du mal schauen?",
                    createdAt: subHours(subMinutes(now, 6), 8),
                    senderAvatar: "/assets/avatars/avatar-fran-perez.png",
                    senderName: "Frank P.",
                    senderOnline: true,
                  },
                ]}
              />
            </Grid>

            <Grid xs={12} md={5}>
              <OverviewUpdateNotes />
            </Grid>

            <Grid xs={12} md={7}>
              <OverviewTips
                sx={{ height: "100%" }}
                tips={[
                  {
                    title: "Dies ist ein super Tipp!",
                    content:
                      "Dies ist der Inhalt eines Tipps. Sie können hier alles schreiben, was Sie möchten. Sie können auch Links und andere Formatierungen hinzufügen.",
                  },
                  {
                    title: "Tipp 2.",
                    content: "Hier könnte Ihre Werbung stehen.",
                  },
                  {
                    title: "Tipp 3.",
                    content: "Hier könnte Ihre Werbung stehen.",
                  },
                ]}
              />
            </Grid>

            <Grid xs={12}>
              <Typography variant="h5">Meine Kurse</Typography>
            </Grid>
            {courses.map((course) => (
              <Grid key={course.id} xs={12} md={4}>
                <CourseCard course={course} />
              </Grid>
            ))}
            <Grid xs={12}>
              <Typography variant="h5">Meine Statistiken</Typography>
            </Grid>
            <Grid xs={12} md={12}>
              <OverviewSubscriptionUsage
                chartSeries={[
                  {
                    name: "This year",
                    data: [40, 37, 41, 42, 45, 42, 36, 45, 40, 44, 38, 41],
                  },
                  {
                    name: "Last year",
                    data: [26, 22, 19, 22, 24, 28, 23, 25, 24, 21, 17, 19],
                  },
                ]}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <OverviewTransactions
                transactions={[
                  {
                    id: "d46800328cd510a668253b45",
                    amount: 25000,
                    createdAt: now.getTime(),
                    currency: "usd",
                    sender: "Devias",
                    status: "on_hold",
                    type: "receive",
                  },
                  {
                    id: "b4b19b21656e44b487441c50",
                    amount: 6843,
                    createdAt: subDays(now, 1).getTime(),
                    currency: "usd",
                    sender: "Zimbru",
                    status: "confirmed",
                    type: "send",
                  },
                  {
                    id: "56c09ad91f6d44cb313397db",
                    amount: 91823,
                    createdAt: subDays(now, 1).getTime(),
                    currency: "usd",
                    sender: "Vertical Jelly",
                    status: "failed",
                    type: "send",
                  },
                  {
                    id: "aaeb96c5a131a55d9623f44d",
                    amount: 49550,
                    createdAt: subDays(now, 3).getTime(),
                    currency: "usd",
                    sender: "Devias",
                    status: "confirmed",
                    type: "receive",
                  },
                ]}
              />
            </Grid>

            <Grid xs={6}>
              <OverviewHelp />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
