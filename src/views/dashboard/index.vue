<script setup>
import WeekStatistics from '@/components/dashboards/WeekStatistics.vue';
import MonthlySchedules from '@/components/dashboards/MonthlySchedules.vue';
import MonthlyRevenue from '@/components/dashboards/MonthlyRevenue.vue';
</script>

<template>
    <v-row>
        <v-col cols="12" sm="12" lg="8">
            <WeekStatistics />
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <div class="mb-6">
                <MonthlySchedules />
            </div>
            <div>
                <MonthlyRevenue />
            </div>
        </v-col>
    </v-row>
</template>
