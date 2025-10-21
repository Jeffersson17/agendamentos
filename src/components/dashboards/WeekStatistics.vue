<script setup>
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const primary = theme.current.value.colors.primary;
const success = theme.current.value.colors.success;
const error = theme.current.value.colors.error;
const chartOptions = computed(() => {
    return {

        series: [
            {
                name: "Cortes ",
                data: [20, 20, 18, 19, 20, 19],
            },
        ],
        chartOptions: {
            grid: {
                borderColor: 'rgba(0,0,0,0.1)',
                strokeDashArray: 3,
                xaxis: {
                    lines: {
                        show: false
                    }
                },

            },
            plotOptions: {
                bar: { horizontal: false, columnWidth: "35%", borderRadius: [8] },
            },
            colors: [primary, error],
            chart: {
                fontFamily: 'inherit',
                type: "bar",
                height: 360,
                offsetY: 10,
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 5,
                colors: ["transparent"],
            },
            xaxis: {
                type: "category",
                categories: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#a1aab2",
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a1aab2",
                    },
                },
            },
            fill: {
                opacity: 0.6,
                colors: [primary],
            },
            tooltip: {
                theme: "dark",
            },
            legend: {
                show: false,
            },
            responsive: [
                {
                    breakpoint: 767,
                    options: {
                        stroke: {
                            show: false,
                            width: 5,
                            colors: ["transparent"],
                        },
                    },
                },
            ],

        },
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex align-center justify-space-between">
                <div>
                    <h5 class="text-h5 mb-1 font-weight-semibold">Estatística da semana</h5>
                </div>
            </div>

            <v-row>
                <v-col cols="12" class="pt-7">
                    <apexchart type="bar" height="370px" :options="chartOptions.chartOptions" :series="chartOptions.series">
                    </apexchart>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
