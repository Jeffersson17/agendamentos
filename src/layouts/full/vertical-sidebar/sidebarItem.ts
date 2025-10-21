import { LayoutDashboardIcon, CalendarEventIcon, UsersIcon, ClockIcon, CreditCardIcon, BuildingIcon, ScissorsIcon } from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Painel de Controle',
        icon: LayoutDashboardIcon,
        BgColor: 'primary',
        to: '/'
    },
    { header: 'Barbearia' },
    {
        title: 'Agendamentos',
        icon: CalendarEventIcon,
        BgColor: 'primary',
        to: '/ui/alerts'
    },
    {
        title: 'Serviços',
        icon: ScissorsIcon,
        BgColor: 'primary',
        to: '/ui/buttons'
    },
    {
        title: 'Clientes',
        icon: UsersIcon,
        BgColor: 'primary',
        to: '/ui/cards'
    },
    {
        title: 'Horarios',
        icon: ClockIcon,
        BgColor: 'primary',
        to: '/ui/tables'
    },

    // { header: 'Administração' },
    // {
    //     title: 'Pagamentos',
    //     icon: CreditCardIcon,
    //     BgColor: 'primary',
    //     to: '/auth/login'
    // },
    // {
    //     title: 'Empresas',
    //     icon: BuildingIcon,
    //     BgColor: 'primary',
    //     to: '/auth/register'
    // }
];

export default sidebarItem;
