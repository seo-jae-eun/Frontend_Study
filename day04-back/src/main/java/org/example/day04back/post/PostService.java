package org.example.day04back.post;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public void save(String title) {
        Post post = Post.builder().title(title).build();
        postRepository.save(post);
    }

    public List<PostReadResponse> read(String word) {
        List<Post> result = postRepository.searchByTitle(word);

        List<PostReadResponse> responses = new ArrayList<>();
        for(Post post : result) {
            PostReadResponse response = PostReadResponse.builder()
                    .idx(post.getIdx())
                    .title(post.getTitle())
                    .build();
            responses.add(response);
        }
        return responses;
    }
}
