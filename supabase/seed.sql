SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '4239ee50-5478-429e-a107-4497660d50e2', '{"action":"user_signedup","actor_id":"a373f7ba-c8c9-47ac-bb3e-eb8c417cd017","actor_username":"gakngs@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-06-15 13:27:37.349716+00', ''),
	('00000000-0000-0000-0000-000000000000', '6a7f8802-eaf2-404b-988e-c0c69d52d45c', '{"action":"login","actor_id":"a373f7ba-c8c9-47ac-bb3e-eb8c417cd017","actor_username":"gakngs@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-15 13:27:37.354482+00', ''),
	('00000000-0000-0000-0000-000000000000', '142d6862-b079-4c8d-8e8c-277520fa7192', '{"action":"user_repeated_signup","actor_id":"a373f7ba-c8c9-47ac-bb3e-eb8c417cd017","actor_username":"gakngs@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2025-06-15 13:27:56.770974+00', ''),
	('00000000-0000-0000-0000-000000000000', '2b08914f-8a9d-497c-8fbb-ba4936f903de', '{"action":"user_signedup","actor_id":"37645b8b-56c1-4893-a35f-7c8dabf3d574","actor_username":"gakn2gs@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-06-15 13:28:10.955576+00', ''),
	('00000000-0000-0000-0000-000000000000', '0a4bd950-0cc9-4faa-9ab5-78d52f788fab', '{"action":"login","actor_id":"37645b8b-56c1-4893-a35f-7c8dabf3d574","actor_username":"gakn2gs@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-15 13:28:10.958166+00', ''),
	('00000000-0000-0000-0000-000000000000', '6644d461-31b6-4be0-8cf1-8f6839bd3fab', '{"action":"user_repeated_signup","actor_id":"37645b8b-56c1-4893-a35f-7c8dabf3d574","actor_username":"gakn2gs@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2025-06-15 13:32:43.991221+00', ''),
	('00000000-0000-0000-0000-000000000000', '52508f9b-d40a-4690-a78b-6eef1cec5dee', '{"action":"user_signedup","actor_id":"0bc1752a-d5f3-4c6b-a125-207dd7fe641e","actor_username":"gakngs@gmail.com2","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-06-15 13:51:26.007662+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a172e5e-740c-4b27-8d90-92a0360fa5c2', '{"action":"login","actor_id":"0bc1752a-d5f3-4c6b-a125-207dd7fe641e","actor_username":"gakngs@gmail.com2","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-15 13:51:26.011382+00', ''),
	('00000000-0000-0000-0000-000000000000', '2dce6726-4f82-4478-9b24-65b13b114b05', '{"action":"token_refreshed","actor_id":"0bc1752a-d5f3-4c6b-a125-207dd7fe641e","actor_username":"gakngs@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-15 14:54:33.760083+00', ''),
	('00000000-0000-0000-0000-000000000000', '093a9b81-d4f8-429b-b332-2dcd2e649b60', '{"action":"token_revoked","actor_id":"0bc1752a-d5f3-4c6b-a125-207dd7fe641e","actor_username":"gakngs@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-15 14:54:33.762684+00', ''),
	('00000000-0000-0000-0000-000000000000', '1586b620-3ed3-43c5-8261-0dbba957b19c', '{"action":"user_signedup","actor_id":"ab25438f-7b6e-4644-92fc-b461f30952a2","actor_username":"gakngs2@gmail.com2","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-06-15 14:54:41.162169+00', ''),
	('00000000-0000-0000-0000-000000000000', '98f9e236-de82-479c-8726-a006147f2a66', '{"action":"login","actor_id":"ab25438f-7b6e-4644-92fc-b461f30952a2","actor_username":"gakngs2@gmail.com2","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-15 14:54:41.165614+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ede7d39-2551-4c0d-b515-7d9591e3300f', '{"action":"user_repeated_signup","actor_id":"ab25438f-7b6e-4644-92fc-b461f30952a2","actor_username":"gakngs2@gmail.com2","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2025-06-15 15:05:56.08511+00', ''),
	('00000000-0000-0000-0000-000000000000', '33790262-e912-427c-89cb-802b1fee5d59', '{"action":"user_signedup","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2025-06-15 15:06:02.821441+00', ''),
	('00000000-0000-0000-0000-000000000000', '2edc6bad-552c-4677-9b1e-e60dbb24f416', '{"action":"login","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-15 15:06:02.823998+00', ''),
	('00000000-0000-0000-0000-000000000000', '49a468a8-f2c0-4942-a1f1-1b614d10eadd', '{"action":"token_refreshed","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-15 16:04:28.7355+00', ''),
	('00000000-0000-0000-0000-000000000000', '97477aa0-5de2-4f79-bcea-975e2c6b490f', '{"action":"token_revoked","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-15 16:04:28.737969+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6b903fa-fddc-4581-bd3f-6ab81aea2699', '{"action":"token_refreshed","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-15 17:02:30.705563+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9dc281e-03ed-45db-9694-c83b2b6dec1d', '{"action":"token_revoked","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-15 17:02:30.708079+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f001975-cdb2-41e0-b8bf-3055dedf3649', '{"action":"token_refreshed","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-16 14:20:35.831143+00', ''),
	('00000000-0000-0000-0000-000000000000', '103a926f-3953-4c0c-82f7-fc1ceaf0c3a3', '{"action":"token_revoked","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-16 14:20:35.833342+00', ''),
	('00000000-0000-0000-0000-000000000000', '02f0e6c0-3311-4609-ade9-9fef6213dbc1', '{"action":"token_refreshed","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-16 16:19:37.96211+00', ''),
	('00000000-0000-0000-0000-000000000000', '2cb53949-e0e9-45fa-bd0b-c6fd34e6dffe', '{"action":"token_revoked","actor_id":"f4c67260-908d-4029-bffe-4b4b8f37c495","actor_username":"gakngs22@gmail.com2","actor_via_sso":false,"log_type":"token"}', '2025-06-16 16:19:37.965135+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'ab25438f-7b6e-4644-92fc-b461f30952a2', 'authenticated', 'authenticated', 'gakngs2@gmail.com2', '$2a$10$LQY4xpxE9RShpmSgXMsPQuvGmvFCGFufmMrPsyVgGg1J1flDm3BGy', '2025-06-15 14:54:41.162846+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-06-15 14:54:41.166188+00', '{"provider": "email", "providers": ["email"]}', '{"bio": "On the road to greatness ≡ƒÜÇ", "sub": "ab25438f-7b6e-4644-92fc-b461f30952a2", "name": "mgsa", "email": "gakngs2@gmail.com2", "gender": "Male", "height": "190 cm", "weight": "25 kg", "birthdate": "2024-4-2", "email_verified": true, "phone_verified": false}', NULL, '2025-06-15 14:54:41.154128+00', '2025-06-15 14:54:41.168353+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '0bc1752a-d5f3-4c6b-a125-207dd7fe641e', 'authenticated', 'authenticated', 'gakngs@gmail.com2', '$2a$10$0yQjDWCrhqp.isDWD2ORO.Eng/K67DGqBetec949TqD4mBbSQekEu', '2025-06-15 13:51:26.008399+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-06-15 13:51:26.012253+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "0bc1752a-d5f3-4c6b-a125-207dd7fe641e", "name": "mgsa", "email": "gakngs@gmail.com2", "gender": "Male", "height": "190 cm", "weight": "25 kg", "birthdate": "2024-4-2", "email_verified": true, "phone_verified": false}', NULL, '2025-06-15 13:51:26.001186+00', '2025-06-15 14:54:33.770492+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'f4c67260-908d-4029-bffe-4b4b8f37c495', 'authenticated', 'authenticated', 'gakngs22@gmail.com2', '$2a$10$UtCCwPhf4R81uILTzj8PLexzncF0hiMhRAq21U3g1eNtMeKgjmErC', '2025-06-15 15:06:02.821971+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-06-15 15:06:02.824642+00', '{"provider": "email", "providers": ["email"]}', '{"bio": "Gym rat with a plan ≡ƒÉÇ", "sub": "f4c67260-908d-4029-bffe-4b4b8f37c495", "name": "mgsa", "email": "gakngs22@gmail.com2", "gender": "Male", "height": "190 cm", "weight": "25 kg", "birthdate": "2024-4-2", "email_verified": true, "phone_verified": false}', NULL, '2025-06-15 15:06:02.816629+00', '2025-06-16 16:19:37.969229+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'a373f7ba-c8c9-47ac-bb3e-eb8c417cd017', 'authenticated', 'authenticated', 'gakngs@gmail.com', '$2a$10$GD8SJp7jEw/Fyu7CGqvrTu3Ok0reKC1g4MRPUEKxstJk2tvPGqa2G', '2025-06-15 13:27:37.351176+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-06-15 13:27:37.355032+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "a373f7ba-c8c9-47ac-bb3e-eb8c417cd017", "email": "gakngs@gmail.com", "email_verified": true, "phone_verified": false}', NULL, '2025-06-15 13:27:37.338257+00', '2025-06-15 13:27:37.361318+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '37645b8b-56c1-4893-a35f-7c8dabf3d574', 'authenticated', 'authenticated', 'gakn2gs@gmail.com', '$2a$10$0xavt8y6xRHA7V9KVt9LhOUktLJbRTyKY8HUHeXKOm84VHQnDJEA6', '2025-06-15 13:28:10.956096+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-06-15 13:28:10.958736+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "37645b8b-56c1-4893-a35f-7c8dabf3d574", "email": "gakn2gs@gmail.com", "email_verified": true, "phone_verified": false}', NULL, '2025-06-15 13:28:10.949776+00', '2025-06-15 13:28:10.960169+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('a373f7ba-c8c9-47ac-bb3e-eb8c417cd017', 'a373f7ba-c8c9-47ac-bb3e-eb8c417cd017', '{"sub": "a373f7ba-c8c9-47ac-bb3e-eb8c417cd017", "email": "gakngs@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-06-15 13:27:37.346246+00', '2025-06-15 13:27:37.346277+00', '2025-06-15 13:27:37.346277+00', '0ce1423e-bded-450a-bad6-b457e5d91981'),
	('37645b8b-56c1-4893-a35f-7c8dabf3d574', '37645b8b-56c1-4893-a35f-7c8dabf3d574', '{"sub": "37645b8b-56c1-4893-a35f-7c8dabf3d574", "email": "gakn2gs@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-06-15 13:28:10.953691+00', '2025-06-15 13:28:10.95372+00', '2025-06-15 13:28:10.95372+00', 'e952ba13-16e6-4edf-b94c-68a21d8f176c'),
	('0bc1752a-d5f3-4c6b-a125-207dd7fe641e', '0bc1752a-d5f3-4c6b-a125-207dd7fe641e', '{"sub": "0bc1752a-d5f3-4c6b-a125-207dd7fe641e", "name": "mgsa", "email": "gakngs@gmail.com2", "gender": "Male", "height": "190 cm", "weight": "25 kg", "birthdate": "2024-4-2", "email_verified": false, "phone_verified": false}', 'email', '2025-06-15 13:51:26.005254+00', '2025-06-15 13:51:26.005284+00', '2025-06-15 13:51:26.005284+00', 'a8e1f910-5c6d-45f3-a468-4ac1848ab499'),
	('ab25438f-7b6e-4644-92fc-b461f30952a2', 'ab25438f-7b6e-4644-92fc-b461f30952a2', '{"bio": "On the road to greatness ≡ƒÜÇ", "sub": "ab25438f-7b6e-4644-92fc-b461f30952a2", "name": "mgsa", "email": "gakngs2@gmail.com2", "gender": "Male", "height": "190 cm", "weight": "25 kg", "birthdate": "2024-4-2", "email_verified": false, "phone_verified": false}', 'email', '2025-06-15 14:54:41.158602+00', '2025-06-15 14:54:41.1587+00', '2025-06-15 14:54:41.1587+00', 'fbf1d547-6630-4569-b2ae-738ba368929a'),
	('f4c67260-908d-4029-bffe-4b4b8f37c495', 'f4c67260-908d-4029-bffe-4b4b8f37c495', '{"bio": "Gym rat with a plan ≡ƒÉÇ", "sub": "f4c67260-908d-4029-bffe-4b4b8f37c495", "name": "mgsa", "email": "gakngs22@gmail.com2", "gender": "Male", "height": "190 cm", "weight": "25 kg", "birthdate": "2024-4-2", "email_verified": false, "phone_verified": false}', 'email', '2025-06-15 15:06:02.819536+00', '2025-06-15 15:06:02.819564+00', '2025-06-15 15:06:02.819564+00', '3d9978ee-e0b7-4c09-8144-b5af96dd7e92');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('d802f344-1d2d-4ae2-9341-9fff96a3d509', 'a373f7ba-c8c9-47ac-bb3e-eb8c417cd017', '2025-06-15 13:27:37.355164+00', '2025-06-15 13:27:37.355164+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '172.18.0.1', NULL),
	('bbf903d5-68aa-4e5f-a1d6-8cbb81d797d8', '37645b8b-56c1-4893-a35f-7c8dabf3d574', '2025-06-15 13:28:10.958773+00', '2025-06-15 13:28:10.958773+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '172.18.0.1', NULL),
	('a64974bb-1405-4198-8e0c-ce663b974c16', '0bc1752a-d5f3-4c6b-a125-207dd7fe641e', '2025-06-15 13:51:26.012374+00', '2025-06-15 14:54:33.773027+00', NULL, 'aal1', NULL, '2025-06-15 14:54:33.772978', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '172.18.0.1', NULL),
	('c4bce94b-dac1-436d-b404-6e8d76335b48', 'ab25438f-7b6e-4644-92fc-b461f30952a2', '2025-06-15 14:54:41.166297+00', '2025-06-15 14:54:41.166297+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '172.18.0.1', NULL),
	('f2eb7caa-beb6-44f4-9f36-51cb37014fdd', 'f4c67260-908d-4029-bffe-4b4b8f37c495', '2025-06-15 15:06:02.824678+00', '2025-06-16 16:19:37.972567+00', NULL, 'aal1', NULL, '2025-06-16 16:19:37.97249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('d802f344-1d2d-4ae2-9341-9fff96a3d509', '2025-06-15 13:27:37.361985+00', '2025-06-15 13:27:37.361985+00', 'password', '65fb9f01-1ab3-4987-bbd2-bdd7dca91754'),
	('bbf903d5-68aa-4e5f-a1d6-8cbb81d797d8', '2025-06-15 13:28:10.96044+00', '2025-06-15 13:28:10.96044+00', 'password', '9a7b7ef4-4d6e-4561-8e1a-8014ec693206'),
	('a64974bb-1405-4198-8e0c-ce663b974c16', '2025-06-15 13:51:26.015098+00', '2025-06-15 13:51:26.015098+00', 'password', '91f6bcb7-a222-4e71-8fb0-d60c61d95dac'),
	('c4bce94b-dac1-436d-b404-6e8d76335b48', '2025-06-15 14:54:41.168713+00', '2025-06-15 14:54:41.168713+00', 'password', 'bb1ade4e-7817-40e8-a2ad-4dc85bab847b'),
	('f2eb7caa-beb6-44f4-9f36-51cb37014fdd', '2025-06-15 15:06:02.826488+00', '2025-06-15 15:06:02.826488+00', 'password', '24474227-f5fd-4e7b-aec1-494fa2e76d2f');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, '3klwe2i342np', 'a373f7ba-c8c9-47ac-bb3e-eb8c417cd017', false, '2025-06-15 13:27:37.357428+00', '2025-06-15 13:27:37.357428+00', NULL, 'd802f344-1d2d-4ae2-9341-9fff96a3d509'),
	('00000000-0000-0000-0000-000000000000', 2, 'q2ub2eumqzsx', '37645b8b-56c1-4893-a35f-7c8dabf3d574', false, '2025-06-15 13:28:10.95942+00', '2025-06-15 13:28:10.95942+00', NULL, 'bbf903d5-68aa-4e5f-a1d6-8cbb81d797d8'),
	('00000000-0000-0000-0000-000000000000', 3, 'ktqbrrrcp4hv', '0bc1752a-d5f3-4c6b-a125-207dd7fe641e', true, '2025-06-15 13:51:26.01348+00', '2025-06-15 14:54:33.763481+00', NULL, 'a64974bb-1405-4198-8e0c-ce663b974c16'),
	('00000000-0000-0000-0000-000000000000', 4, '5pevxmz4txbw', '0bc1752a-d5f3-4c6b-a125-207dd7fe641e', false, '2025-06-15 14:54:33.768102+00', '2025-06-15 14:54:33.768102+00', 'ktqbrrrcp4hv', 'a64974bb-1405-4198-8e0c-ce663b974c16'),
	('00000000-0000-0000-0000-000000000000', 5, 'tetagehlysfd', 'ab25438f-7b6e-4644-92fc-b461f30952a2', false, '2025-06-15 14:54:41.167388+00', '2025-06-15 14:54:41.167388+00', NULL, 'c4bce94b-dac1-436d-b404-6e8d76335b48'),
	('00000000-0000-0000-0000-000000000000', 6, 'qigqk7faae4g', 'f4c67260-908d-4029-bffe-4b4b8f37c495', true, '2025-06-15 15:06:02.825376+00', '2025-06-15 16:04:28.73864+00', NULL, 'f2eb7caa-beb6-44f4-9f36-51cb37014fdd'),
	('00000000-0000-0000-0000-000000000000', 7, 'gbpcsaqyhvct', 'f4c67260-908d-4029-bffe-4b4b8f37c495', true, '2025-06-15 16:04:28.739965+00', '2025-06-15 17:02:30.708702+00', 'qigqk7faae4g', 'f2eb7caa-beb6-44f4-9f36-51cb37014fdd'),
	('00000000-0000-0000-0000-000000000000', 8, 'csjqbllbcyxp', 'f4c67260-908d-4029-bffe-4b4b8f37c495', true, '2025-06-15 17:02:30.710452+00', '2025-06-16 14:20:35.834054+00', 'gbpcsaqyhvct', 'f2eb7caa-beb6-44f4-9f36-51cb37014fdd'),
	('00000000-0000-0000-0000-000000000000', 9, 'ro7xcxkwifg2', 'f4c67260-908d-4029-bffe-4b4b8f37c495', true, '2025-06-16 14:20:35.83514+00', '2025-06-16 16:19:37.965915+00', 'csjqbllbcyxp', 'f2eb7caa-beb6-44f4-9f36-51cb37014fdd'),
	('00000000-0000-0000-0000-000000000000', 10, 'oumjhlewukdy', 'f4c67260-908d-4029-bffe-4b4b8f37c495', false, '2025-06-16 16:19:37.967073+00', '2025-06-16 16:19:37.967073+00', 'ro7xcxkwifg2', 'f2eb7caa-beb6-44f4-9f36-51cb37014fdd');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: workouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."workouts" ("id", "name", "description", "timer", "exercises", "is_template", "user_id", "created_at", "updated_at") VALUES
	(1, 'simple workout', '', 1280, '[{"id":1,"name":"Kettlebell Pass Between The Legs","sets":[{"id":1,"weight":2,"reps":10,"isCompleted":true}],"restTime":60,"isExpanded":true}]', true, 'f4c67260-908d-4029-bffe-4b4b8f37c495', '2025-06-15 15:39:45.303412+00', '2025-06-15 15:39:45.303412+00'),
	(2, 'simple workout', '', 12, '[{"id":1,"name":"Kettlebell Pass Between The Legs","sets":[{"id":1,"weight":9,"reps":13,"isCompleted":true}],"restTime":60,"isExpanded":true,"previousData":{"date":"Invalid date","sets":[{"id":1,"weight":2,"reps":10,"isCompleted":true}]}}]', false, 'f4c67260-908d-4029-bffe-4b4b8f37c495', '2025-06-15 16:16:56.431654+00', '2025-06-15 16:16:56.431654+00'),
	(3, 'simple workout', '', 9, '[{"id":1,"name":"Kettlebell Pass Between The Legs","sets":[{"id":1,"weight":21,"reps":1,"isCompleted":false}],"restTime":60,"isExpanded":true,"previousData":{"date":"Invalid date","sets":[{"id":1,"weight":9,"reps":13,"isCompleted":true}]}}]', false, 'f4c67260-908d-4029-bffe-4b4b8f37c495', '2025-06-15 16:35:01.881556+00', '2025-06-15 16:35:01.881556+00'),
	(4, 'simple workout', '', 28, '[{"id":1,"name":"Kettlebell Pass Between The Legs","sets":[{"id":1,"weight":22,"reps":4,"isCompleted":true}],"restTime":60,"isExpanded":true,"previousData":{"date":"a day ago","sets":[{"id":1,"weight":21,"reps":1,"isCompleted":false}]}}]', false, 'f4c67260-908d-4029-bffe-4b4b8f37c495', '2025-06-16 14:44:19.712053+00', '2025-06-16 14:44:19.712053+00');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 10, true);


--
-- Name: workouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."workouts_id_seq"', 36, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
