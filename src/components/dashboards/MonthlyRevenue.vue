<script setup>
</script>
<template>
    <v-card elevation="10" class="withbg">
        <v-card-item>
            <div class="d-flex align-center justify-space-between pt-sm-2">
                <v-card-title class="text-h5">Faturamento do Mês</v-card-title>
                <v-btn size="small" icon class="bg-success">
                    <v-avatar size="20" class="text-surface">
                        <CurrencyDollarIcon size="20" />
                    </v-avatar>
                </v-btn>
            </div>
            <v-row>
                <v-col cols="12">
                    <div class="mt-2">
                        <h3 class="text-h4">R$12,850</h3>
                        <div class="mt-3">
                            <v-avatar class="bg-lighterror text-accent" size="20">
                                <ArrowDownRightIcon class="text-error" size="15" />
                            </v-avatar>
                            <span class="text-subtitle-2 ml-2 font-weight-bold">+2%</span>
                            <span class="text-subtitle-2 text-muted ml-1"> Este mês</span>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
