import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { leadSchema } from "@/schemas/leadSchema";

type Lead = typeof leadSchema.infer;
const initialState: Lead[] = [];

const leadSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {
        addLead: (state, action: PayloadAction<Lead>) => {
            state.push(action.payload);
        },
        updateLeadStatus: (state, action: PayloadAction<{ email: string; status: "REACHED_OUT" }>) => {
            const lead = state.find((l) => l.email === action.payload.email);
            if (lead) lead.status = action.payload.status;
        },
    },
});

export const { addLead, updateLeadStatus } = leadSlice.actions;

export default leadSlice.reducer;