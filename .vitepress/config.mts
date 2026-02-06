import { defineConfig } from 'vitepress'
import { type DefaultTheme } from 'vitepress'

process.env.VITE_EXTRA_EXTENSIONS = 'sh'

// https://vitepress.dev/it/site-config
export default defineConfig({
  title: "IVR Wiki",
  description: "Anleitungen, Konfigurationen, etc.",
  base: '/ivrwiki/',
  themeConfig: {
    // https://vitepress.dev/it/default-theme-config
    nav: nav(),

    sidebar: {
      '/general/': { base: '/general/', items: sidebarGeneral() },
      '/it/': { base: '/it/', items: sidebarIT() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ivr-us/ivrwiki' }
    ]
  }
})


function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'General',
      link: '/general/index',
      activeMatch: '/general/'
    },
    {
      text: 'IT',
      link: '/it/index',
      activeMatch: '/it/'
    }
  ]
}

function sidebarGeneral(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'General',
      items: [
        {
          text: 'Devices',
          collapsed: false,
          items: [
            { text: 'Ricoh Counter (DE)', link: 'devices/ricoh-counter' },
          ]
        },
        {
          text: 'Software',
          collapsed: false,
          items: [
            { text: 'Outlook', link: 'software/outlook' },
            { text: 'GitHub', link: 'software/github' },
            { text: 'VSCode', link: 'software/vscode' },
            { text: 'VPN', link: 'software/vpn' }
          ]
        },
        {
          text: 'Server',
          collapsed: false,
          items: [
            { text: 'SSH setup (macOS)', link: 'server/ssh_macos' },
            { text: 'RDP setup (macOS)', link: 'server/rdp_macos' }
          ]
        }
      ]
    }
  ]
}

function sidebarIT(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'IT',
      items: [
        {
          text: 'Devices',
          collapsed: false,
          items: [
            { text: 'Printer', link: 'devices/ricoh-printer' },
            { text: 'Windows 11', link: 'devices/windows11' }
          ]
        },
        {
          text: 'Info',
          collapsed: false,
          items: [
            { text: 'Admin cmd', link: 'info/admin-cmd' },
            { text: 'Device naming', link: 'info/device-naming-scheme' }
          ]
        },
        {
          text: 'Server',
          collapsed: false,
          items: [
            { text: 'SSH and RDP setup (Windows client)', link: 'server/ssh_rdp_windows' },
            { text: 'XRDP setup (Ubuntu server)', link: 'server/xrdp_mate' }
          ]
        }
      ]
    }
  ]
}