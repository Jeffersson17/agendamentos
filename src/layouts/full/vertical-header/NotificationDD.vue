<script setup>
import { ref } from 'vue';

const items = ref([
    { title: 'Agendamento', message: 'Julio • Hoje 14:00' },
    { title: 'Agendamento', message: 'Cesár • Amanhã 10:00' },
    { title: 'Agendamento', message: 'Maria • 15/03/25 09:00' },
    { title: 'Agendamento', message: 'João • 16/03/25 11:00' },
    { title: 'Agendamento', message: 'João cancelou agendamento' },
    { title: 'Agendamento', message: 'Pedro • 17/03/25 12:00' },
    { title: 'Agendamento', message: 'Ana • 18/03/25 13:00' }
]);

const clearNotifications = () => {
    items.value = [];
};
</script>

<template>
    <v-menu :close-on-content-click="false" offset-y>
        <template #activator="{ props }">
            <v-btn variant="text" v-bind="props" icon>
                <v-badge dot color="primary" offset-x="-5" offset-y="-3">
                    <BellRingingIcon stroke-width="1.5" size="22" />
                </v-badge>
            </v-btn>
        </template>

        <v-sheet rounded="xl" width="260" elevation="10" class="mt-2">
            <!-- Cabeçalho -->
            <div class="d-flex align-center justify-space-between px-4 pt-3 pb-2">
                <span class="text-subtitle-2 font-weight-medium">Notificações</span>
                <v-btn text variant="text" color="red" size="small" @click="clearNotifications" v-if="items.length"> Limpar </v-btn>
            </div>

            <!-- Lista -->
            <v-divider></v-divider>
            <div style="max-height: 300px; overflow-y: auto">
                <v-list class="py-0" density="comfortable" v-if="items.length">
                    <v-list-item v-for="(item, index) in items" :key="index" color="primary">
                        <v-list-item-title class="text-body-2 font-weight-medium">
                            {{ item.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-caption">
                            {{ item.message }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>

                <!-- Estado vazio -->
                <div v-else class="text-center py-6 text-caption text-grey">Nenhuma notificação</div>
            </div>
        </v-sheet>
    </v-menu>
</template>
