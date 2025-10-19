<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="" variant="text" v-bind="props" icon>
                <v-avatar size="35">
                    <img src="../../../assets/images/profile/user_default.jpg" height="35" alt="user" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="xl" width="200" elevation="10" class="mt-2">
            <v-list class="py-0" lines="one" density="compact">
                <v-list-item value="item1" color="primary" @click="showEditProfile = true">
                    <template v-slot:prepend>
                        <UserIcon stroke-width="1.5" size="20" />
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">Meu Perfil</v-list-item-title>
                </v-list-item>
            </v-list>
            <div class="pt-4 pb-4 px-5 text-center">
                <v-btn to="" color="red" variant="outlined" class="rounded-pill" block>Deslogar</v-btn>
            </div>
        </v-sheet>
    </v-menu>
    <!-- Edit Profile Modal -->
    <v-dialog v-model="showEditProfile" max-width="600">
        <v-card>
            <v-card-title class="d-flex align-center justify-space-between">
                <span>Editar Perfil</span>
                <v-avatar size="35">
                    <img src="../../../assets/images/profile/user_default.jpg" height="35" alt="user" class="image" />
                </v-avatar>
            </v-card-title>
            <v-divider class="my-1" />
            <v-card-text>
                <v-row dense>
                    <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Nome*" type="text" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field label="CPF*" type="number" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Email*" type="email" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Senha*" type="password" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Confirmar Senha*" type="password" required></v-text-field>
                    </v-col>
                </v-row>

                <small class="text-caption text-medium-emphasis">*indica campo obrigatório</small>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="showEditProfile = false">Fechar</v-btn>
                <v-btn color="success" text @click="showEditProfile = false">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const showEditProfile = ref(false);
</script>
