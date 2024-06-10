// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manually create sidebars for each course

  introToOSS: [
    {
      type: 'category',
      label: 'Intro to Open Source',
      items: [
        'intro-to-oss/Contributor-README',
        'intro-to-oss/what-is-open-source',
        'intro-to-oss/why-open-source',
        'intro-to-oss/types-of-contributions',
        'intro-to-oss/how-to-contribute-to-open-source',
        'intro-to-oss/tools-to-be-successful',
        'intro-to-oss/the-secret-sauce',
        'intro-to-oss/glossary',
        'intro-to-oss/conclusion',
        'intro-to-oss/additional-resources',
      ],
    },
  ],

  becomingAMaintainer: [
    {
      type: 'category',
      label: 'Becoming a Maintainer',
      items: [
        'becoming-a-maintainer/Maintainer-README',
        'becoming-a-maintainer/intro',
        'becoming-a-maintainer/how-to-setup-your-project',
        'becoming-a-maintainer/building-community',
        'becoming-a-maintainer/communication-and-collaboration',
        'becoming-a-maintainer/issues-and-pull-requests',
        'becoming-a-maintainer/maintaining-code-quality',
        'becoming-a-maintainer/maintainer-powerups',
        'becoming-a-maintainer/maintainers-guestbook',
        'becoming-a-maintainer/metrics-and-analytics',
        'becoming-a-maintainer/your-team',
        'becoming-a-maintainer/additional-resources',
      ],
    },
  ],
};

export default sidebars;