import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../";
import { View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase/firebase";
import { useState } from "react";