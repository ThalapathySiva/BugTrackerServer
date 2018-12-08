import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne
} from 'typeorm';
import { User } from './User';

@Entity()
export class Bug extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column({ default: 'unresolved' })
	status: 'unresolved' | 'resolved' | 'closed';

	@ManyToOne(type => User, user => user.bugs)
	assignedTo: User;
}
