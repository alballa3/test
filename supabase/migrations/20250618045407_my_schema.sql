create sequence "public"."workouts_id_seq";

create table "public"."workouts" (
    "id" bigint not null default nextval('workouts_id_seq'::regclass),
    "name" text not null,
    "description" text,
    "timer" integer not null,
    "exercises" json not null,
    "is_template" boolean not null default false,
    "user_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);


alter sequence "public"."workouts_id_seq" owned by "public"."workouts"."id";

CREATE UNIQUE INDEX workouts_pkey ON public.workouts USING btree (id);

alter table "public"."workouts" add constraint "workouts_pkey" PRIMARY KEY using index "workouts_pkey";

alter table "public"."workouts" add constraint "workouts_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."workouts" validate constraint "workouts_user_id_fkey";

grant delete on table "public"."workouts" to "anon";

grant insert on table "public"."workouts" to "anon";

grant references on table "public"."workouts" to "anon";

grant select on table "public"."workouts" to "anon";

grant trigger on table "public"."workouts" to "anon";

grant truncate on table "public"."workouts" to "anon";

grant update on table "public"."workouts" to "anon";

grant delete on table "public"."workouts" to "authenticated";

grant insert on table "public"."workouts" to "authenticated";

grant references on table "public"."workouts" to "authenticated";

grant select on table "public"."workouts" to "authenticated";

grant trigger on table "public"."workouts" to "authenticated";

grant truncate on table "public"."workouts" to "authenticated";

grant update on table "public"."workouts" to "authenticated";

grant delete on table "public"."workouts" to "service_role";

grant insert on table "public"."workouts" to "service_role";

grant references on table "public"."workouts" to "service_role";

grant select on table "public"."workouts" to "service_role";

grant trigger on table "public"."workouts" to "service_role";

grant truncate on table "public"."workouts" to "service_role";

grant update on table "public"."workouts" to "service_role";


